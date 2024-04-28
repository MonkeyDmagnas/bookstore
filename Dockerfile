FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /bookstore

COPY ./package*.json /bookstore

RUN npm install -g
RUN npm install react-scripts@latest

COPY . .

CMD ["npm","start"]
