FROM node:20.12.1-alpine

ENV NODE_OPTIONS="--max-old-space-size=4096"
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]