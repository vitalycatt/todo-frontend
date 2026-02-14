// Общий ответ сервера (если бэк оборачивает в { data, message })
// export interface ApiResponse<T> {
//   data: T;
//   message?: string;
//   status: "success" | "error";
// }

// Тип для пагинации (если понадобится)
// export interface PaginatedResponse<T> {
//   items: T[];
//   total: number;
//   page: number;
//   limit: number;
// }

// Тип для ошибки
export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}
