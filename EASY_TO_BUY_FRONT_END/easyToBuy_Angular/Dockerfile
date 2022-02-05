### STAGE 1: Build ###
FROM node:16.13.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm cache clear --force
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.21.4-alpine
##COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/easyToBuy /usr/share/nginx/html
EXPOSE 3200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
