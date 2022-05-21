FROM node:alpine
WORKDIR /cheeseria-api
COPY package.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "dev"]