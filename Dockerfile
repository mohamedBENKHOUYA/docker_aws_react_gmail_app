
FROM node:alpine AS builder
WORKDIR '/app'
COPY ./package.json ./

RUN npm install --save-dev webpack --force
RUN npm install
RUN node --expose-gc --max-old-space-size=8192 node_modules/react-scripts/scripts/build.js
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

