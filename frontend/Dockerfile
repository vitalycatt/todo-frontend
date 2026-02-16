# Этап 1: Сборка приложения
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Этап 2: Раздача статики через Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Для SPA с роутингом
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
