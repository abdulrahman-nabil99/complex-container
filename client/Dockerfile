FROM node:lts-alpine as builder

WORKDIR '/usr/app'

COPY package.json .

RUN npm start build

COPY . .

CMD ["npm", "run", "start"]