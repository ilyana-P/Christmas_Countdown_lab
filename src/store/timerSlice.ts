import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TimeLeft } from "../services/christmasApi";
// 1. Описываем состояние этого слайса
interface TimerState {
lastData: TimeLeft | null;
}
// 2. Начальное состояние
const initialState: TimerState = {
lastData: null,
};
// 3. Создаём slice
const timerSlice = createSlice({
name: "timer", // имя слайса
initialState, // начальное состояние
reducers: {
// 4. Редьюсер для сохранения последних данных с сервера
setLastData(state, action: PayloadAction<TimeLeft>) {
state.lastData = action.payload;
},
},
});
// 5. Экспортируем action и reducer
export const { setLastData } = timerSlice.actions;
export default timerSlice.reducer;

