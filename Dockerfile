FROM node:latest

MAINTAINER maximus7022


COPY  . /var/www
WORKDIR /var/www

RUN npm install
RUN cd client && npm install && cd ..

ENTRYPOINT [ "npm", "run", "dev" ]
