FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json .

RUN npm i -g nodemon
RUN npm i

# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 7050
CMD [ "npm", "start" ]