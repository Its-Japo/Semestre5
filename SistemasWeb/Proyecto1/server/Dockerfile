FROM node:alpine

WORKDIR /src/server

#COPY /server/package*.json ./

RUN npm i create-vite

RUN npm install

#COPY server/. .

CMD ["npm","run","start"]