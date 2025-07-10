# 1단계: 빌드 단계
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 필요한 패키지 설치
RUN npm install

# 소스 코드 복사
COPY . .

# React 앱 빌드 (정적 파일 생성)
RUN npm run build

# 2단계: 실행 단계 (Nginx 이용)
FROM nginx:stable-alpine

# Nginx의 기본 HTML 경로에 빌드 결과 복사
COPY --from=builder /app/build /usr/share/nginx/html

# 포트 설정 (기본 HTTP 포트)
EXPOSE 80

# Nginx 실행 (포그라운드)
CMD ["nginx", "-g", "daemon off;"]