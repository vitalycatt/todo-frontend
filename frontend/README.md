## HOW TO SETUP

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## STACK

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## PROJECT FLOW

1. ПОЛУЧЕНИЕ
   Бэк: { \_id, description, status, createdAt, updatedAt }
   ↓
   Фронт: const [tasks, setTasks] = useState<Task[]>(data)
   ↓

2. РЕДАКТИРОВАНИЕ
   Выбрали задачу → const [editingTask, setEditingTask] = useState<Task | null>(task)
   ↓
   Начали менять поля → const [formData, setFormData] = useState<TaskDraft>({
   description: editingTask.description,
   status: editingTask.status
   })
   ↓

3. ОТПРАВКА
   Создание: axios.post<Task>('/tasks', formData) // formData: CreateTaskDto
   Обновление: axios.patch<Task>(`/tasks/${id}`, formData) // formData: UpdateTaskDto
   ↓

4. ОБНОВЛЕНИЕ СПИСКА
   Получили свежую Task с бэка → заменяем в tasks

## TYPES

// ---------- 1. Полная сущность (то, что приходит с бэкенда) ----------
export interface Task {
\_id: string; // генерируется MongoDB
description: string; // обязательное поле
status: 'todo' | 'in-progress' | 'done'; // enum + default "todo"
createdAt: string; // ISO date (applyTimestamps)
updatedAt: string; // ISO date (applyTimestamps)
}

// ---------- 2. Типы для действий (то, что уходит на бэкенд) ----------
// Создание новой задачи — не отправляем \_id и даты
export interface CreateTaskDto {
description: string; // обязательное поле
status?: 'todo' | 'in-progress' | 'done'; // опционально (бэк подставит default)
}

// Обновление существующей задачи — все поля опциональны
export interface UpdateTaskDto {
description?: string;
status?: 'todo' | 'in-progress' | 'done';
}

// ---------- 3. Типы для UI (формы, стейты редактора) ----------
// Данные формы (совпадает с CreateTaskDto, но можно расширить)
export type TaskFormData = CreateTaskDto;

// Состояние редактора — Discriminated Union для безопасной работы
export type TaskEditorState =
| { type: 'idle' } // режим просмотра
| { type: 'creating'; draft: TaskFormData } // создание новой
| { type: 'editing'; id: string; draft: TaskFormData }; // редактирование существующей
