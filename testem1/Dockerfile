FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn test; echo $? > /npm.exitcode
EXPOSE 3333
CMD ["yarn","start"]