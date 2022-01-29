FROM node:16.13.1

LABEL authors="Yash Shah <yashrocks.shah@gmail.com>"

WORKDIR /www
COPY . .
RUN npm install && npm cache clean --force
ENV MONGO_URL="host.docker.internal"
EXPOSE 8002

CMD ["npm", "start"]
