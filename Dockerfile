
FROM node:20-alpine as Frontend 

COPY ./Frontend /app

WORKDIR /app

RUN npm install 

RUN npm run build

FROM node:20-alpine as Backend 

COPY ./Backend /app

WORKDIR /app 

RUN npm install 

COPY --from=frontend /app/dist /app/public

# EXPOSE 3000

CMD ["node" , "server.js"]

