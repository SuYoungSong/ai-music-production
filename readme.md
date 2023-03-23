 ## 프로젝트 실행방법
 

### 프로젝트 참여인원(7명)
김주영, 송수영, 송유선, 이유진, 위규연, 조계원, 홍경석 
### client
[C++ build tools 설치](https://aka.ms/vs/16/release/vs_buildtools.exe)
 ```
cd client
npm i
npm start
 ```
### server
[작사 모델 다운로드](https://drive.google.com/drive/folders/1VEi-_t4e2Z3S2yraH2LPF0jPP-Fnz8tS?usp=sharing)

작사 모델을 다운받은 후 server/app/model/write_lyrics_model 경로에 넣어준다
```
cd server
pip install -r requirements.txt
uvicorn main:app --reload
```
### 


### 작동영상 1
https://user-images.githubusercontent.com/80526924/227167920-a754fe28-2551-47b0-81cb-933832b82dbd.mp4

<br>
<br>
<br>
<br>
### 작동영상 2
https://user-images.githubusercontent.com/80526924/227167933-097eca61-8ade-4c68-95ef-13c0f87b55a9.mp4



