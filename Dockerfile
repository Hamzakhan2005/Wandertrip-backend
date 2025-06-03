FROM node:18

WORKDIR /index

COPY package*.json ./

RUN npm install -g nodemon

COPY . .

EXPOSE 5000

CMD ["npx", "nodemon", "index.js"]
