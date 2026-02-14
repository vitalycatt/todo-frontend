# Todo API

REST API для управления задачами на **Node.js + Express + MongoDB (Mongoose)**.

## STACK

- **Node.js** — среда выполнения
- **Express** — веб-фреймворк
- **MongoDB + Mongoose** — база данных и ODM
- **ES Modules** — import/export синтаксис

## INSTALLATION

1. Клонировать репозиторий:

```bash
git clone https://github.com/username/todo-app.git
cd todo-app

2. Установить зависимости:
npm install

3. Создать файл .env в корне проекта:
PORT=3001
DB_URL=mongodb://localhost:27017/tododb

## DEV mode: npm run dev
## PROD mode: npm start

## STRUCTURE
├── app.js                 # Точка входа, настройка Express
├── Router.js             # Маршруты API
├── TodosController.js    # Контроллеры (обработка запросов)
├── TodosService.js       # Сервисы (бизнес-логика, работа с БД)
├── Todos.js              # Mongoose модель и схема
├── .env                  # Переменные окружения
├── .gitignore            # Игнорируемые файлы
└── README.md            # Документация

## API
| Метод   | URL              | Описание               |
|---------|------------------|------------------------|
| `GET`   | `/api/todos`     | Получить все задачи    |
| `POST`  | `/api/todos`     | Создать задачу         |
| `PATCH` | `/api/todos/:id` | Обновить задачу        |
| `DELETE`| `/api/todos/:id` | Удалить задачу         |
```
