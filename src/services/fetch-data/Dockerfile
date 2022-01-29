FROM node:16.13.1

LABEL authors="Yash Shah <yashrocks.shah@gmail.com>"

WORKDIR /www
COPY . .
RUN npm install && npm cache clean --force

EXPOSE 8001

CMD ["npm", "start"]
