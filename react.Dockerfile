FROM node:latest
RUN mkdir -p ~/front
WORKDIR  /front
COPY package.json package.json
RUN  npm install --no-cache 
COPY public public
RUN mkdir -p ~/src
CMD [ "npm","start"]