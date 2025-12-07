import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// 1. Описываем тип данных, которые вернёт сервер
export interface TimeLeft {
days: number;
hours: number;
minutes: number;
seconds: number;
}
// 2. Создаём API-сервис
export const christmasApi = createApi({
// Уникальное имя для этого API в Redux
reducerPath: "christmasApi",
// Базовый URL для всех запросов
baseQuery: fetchBaseQuery({
baseUrl: "https://christmascountdown.live",
}),
// Описание доступных endpoints (запросов)
endpoints: (builder) => ({
// 3. Endpoint: запрос на получение времени до Рождества
getTimeLeft: builder.query<TimeLeft, void>({
// относительный путь к ресурсу
query: () => "/api/timeleft",
}),
}),
});
// 4. Автоматически сгенерированный хук для запросаChristmas Lab5
export const { useGetTimeLeftQuery } = christmasApi;