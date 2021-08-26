FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
RUN yarn test; echo $? > /npm.exitcode
COPY . .
EXPOSE 3333
CMD ["yarn","start"]