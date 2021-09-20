FROM node:lts-alpine
WORKDIR /var/www
COPY package*.json ./
RUN  yarn install --production
COPY . .
EXPOSE 3333
CMD ["yarn", "start"]