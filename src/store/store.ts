// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { christmasApi } from "../services/christmasApi";
import timerReducer from "./timerSlice";
export const store = configureStore({
reducer: {
// Редьюсер RTK Query (обязательно под ключом reducerPath)
[christmasApi.reducerPath]: christmasApi.reducer,
// Наш редьюсер таймера
timer: timerReducer,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(christmasApi.middleware),
});
// Типы для useDispatch/useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;