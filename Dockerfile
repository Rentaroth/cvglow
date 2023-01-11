FROM node:19-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package*.json  .
RUN npm install

COPY . /app

EXPOSE 3010
CMD [ "npm", "start" ]