 ## 프로젝트 실행방법
 

### 프로젝트 참여인원(7명)
김주영, 송수영, 송유선, 이유진, 위규연, 조계원, 홍경석 
### client
[C++ build tools 설치 필요] https://aka.ms/vs/16/release/vs_buildtools.exe
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
