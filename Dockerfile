FROM node:16 as builder

WORKDIR /home/node/app

RUN npm install -g @angular/cli

COPY *.json ./
RUN npm ci

COPY ./ ./
RUN npm run build


FROM nginx:stable-alpine

EXPOSE 80

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/node/app/dist/hue-control/ /usr/share/nginx/html/
