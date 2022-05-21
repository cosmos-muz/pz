FROM node:alpine
WORKDIR /cheeseria-ui
COPY package.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "start"]