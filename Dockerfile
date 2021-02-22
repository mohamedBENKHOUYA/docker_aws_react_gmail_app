
FROM node:current-alpine AS builder
WORKDIR '/app'
COPY ./package.json ./

#RUN npm install --save-dev webpack --force
#RUN npm install -g npm@7.5.4
#RUN npm install npm -g
RUN npm install --save
COPY ./ ./
RUN npm i history
ENV GENERATE_SOURCEMAP false
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

