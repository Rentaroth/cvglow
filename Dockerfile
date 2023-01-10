FROM node:12-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json  .
RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "run", "start" ]