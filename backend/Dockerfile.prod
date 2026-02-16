# backend/Dockerfile

# 1. Базовый образ (официальный Node.js)
FROM node:18-alpine

# 2. Рабочая директория внутри контейнера
WORKDIR /app

# 3. Копируем package.json (отдельно для кэширования)
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm ci

# 5. Копируем весь код
COPY . .

# 6. Собираем TypeScript
# RUN npm run build

# 7. Порт, который будет слушать приложение
EXPOSE 5000

# 8. Команда запуска
CMD ["node", "index.js"]
