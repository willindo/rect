
FROM node:lts-alpine 
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 4000

CMD ["npm","run","dev"]
