FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install nodemon -g

COPY ../../package.json /usr/src/app/

RUN npm install

COPY ../../ /usr/src/app

EXPOSE 3030

CMD [ "npm", "start" ]