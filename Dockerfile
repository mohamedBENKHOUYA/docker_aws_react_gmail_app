
FROM node:alpine AS builder
WORKDIR '/app'
RUN set NODE_OPTIONS=--max_old_space_size=8172
COPY ./package.json ./

RUN npm install --save-dev webpack --force
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

