FROM node:20.5.0
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN rm -rf .next
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]