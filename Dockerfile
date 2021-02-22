
FROM node:alpine AS builder
WORKDIR '/app'
COPY ./package.json ./

RUN npm install --save-dev webpack --force
RUN npm install
COPY ./ ./
RUN npm install -g increase-memory-limit
RUN increase-memory-limit
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

