FROM node:20.12.1-alpine

ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY package.json /app/package.json
COPY angular.json /app/angular.json

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]