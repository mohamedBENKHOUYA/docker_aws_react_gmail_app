
FROM node:current-alpine AS builder
WORKDIR '/app'
COPY ./package.json ./

RUN npm install --save-dev webpack --force
#RUN npm install -g npm@7.5.4
RUN npm install
COPY ./ ./

FROM nginx
EXPOSE 80
COPY --from=builder /app/index.html /usr/share/nginx/html

