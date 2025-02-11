FROM node:20 AS build

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/certifigo /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
