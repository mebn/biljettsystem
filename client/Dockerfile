FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /

RUN npm install
RUN npm install -g serve

# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN npm build
EXPOSE 3000

CMD [ "npm", "start" ]
