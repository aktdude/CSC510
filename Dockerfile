# base
FROM node:alpine
ENV CI=true



RUN apk upgrade --no-cache --available \
    && apk add --no-cache \
      chromium-swiftshader \
      ttf-freefont \
      font-noto-emoji \
    && apk add --no-cache \
      --repository=https://dl-cdn.alpinelinux.org/alpine/edge/testing \
      font-wqy-zenhei

WORKDIR /usr/src/app

COPY . /usr/src/app/.
ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/

# Autorun chrome headless
ENV CHROMIUM_FLAGS="--disable-software-rasterizer --disable-dev-shm-usage"
RUN npm uninstall sqlite3
RUN apk add --no-cache sqlite
RUN apk add python3
RUN npm install sqlite3

RUN npm install

RUN node models/database.js

RUN npm run build --if-present
RUN npm run test:ng_ui

#RUN npm install sqlite3 --build-from-source --target_arch=arm64 --fallback-to-build

RUN npm run test:backend

