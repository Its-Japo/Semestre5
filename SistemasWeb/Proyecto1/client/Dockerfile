FROM node:alpine

WORKDIR /src/client

COPY client/package*.json ./

RUN npm install

COPY client/. .

CMD ["npm","run","dev"]