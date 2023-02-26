FROM node:16

WORKDIR /usr

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8081
CMD [ "yarn", "dev" ]