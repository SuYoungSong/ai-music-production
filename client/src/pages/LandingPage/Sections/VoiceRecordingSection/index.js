// import { Container } from "styled.js";

import { Container } from "./styled";
import { useCallback, useEffect, useState } from "react";

// https://stackoverflow.com/questions/65191193/media-recorder-save-in-wav-format-across-browsers
import { MediaRecorder, register } from "extendable-media-recorder";
import { connect } from "extendable-media-recorder-wav-encoder";
import axios from "axios";

const VoiceRecordingSection = () => {
  const [onRecording, setOnRecording] = useState(false);
  const [audioData, setAudioData] = useState("");
  const [audioURL, setAudioURL] = useState("");

  const [stream, setStream] = useState("");
  const [source, setSource] = useState("");
  const [analyser, setAnalyser] = useState("");
  const [media, setMedia] = useState("");

  async function extendMediaRecoder() {
    await register(await connect());
  }
  useEffect(() => {
    extendMediaRecoder(); // ".wav" 확장자로 변환을 지원
  }, []);

  const onClickOnRecording = async () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    const makeSound = (stream) => {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    };

    // 마이크 사용 권한 확인
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/wav",
      });
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = (e) => {
        // 2분(120초)가 지나면 자동으로 녹음 중지
        if (e.playbackTime > 120) {
          stream.getAudioTracks().forEach((track) => {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = (e) => {
            setAudioData(e.data);
            setOnRecording(false);
          };
        } else {
          setOnRecording(true);
        }
      };
    });
  };

  const onClickOffRecording = () => {
    media.ondataavailable = (e) => {
      setAudioData(e.data);
      setOnRecording(false);
    };

    stream.getAudioTracks().forEach((track) => {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioData) {
      console.log(URL.createObjectURL(audioData));
      setAudioURL(URL.createObjectURL(audioData));
    }

    console.log("audioData >> ", audioData);
  }, [audioData]);

  const onClickAudioDownload = () => {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(audioData);
    link.download = `${+new Date()}`;
    link.click();
  };

  const onClickRequestServer = () => {
    const fd = new FormData();

    console.log("audioData >> ", audioData);
    fd.append("audio", audioData, `user_${+new Date()}.wav`);

    axios
      .post("http://localhost:8000/set-item", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res >> ", res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <button onClick={!onRecording ? onClickOnRecording : onClickOffRecording}>
        {!onRecording ? "녹음 시작" : "녹음 중지"}
      </button>
      <button onClick={onSubmitAudioFile}>녹음 결과 확인</button>
      <button onClick={onClickAudioDownload}>.wav 다운로드</button> <br />
      <button onClick={onClickRequestServer}>오디오 전송</button> <br />
      <audio controls src={audioURL} />
    </Container>
  );
};

export default VoiceRecordingSection;
