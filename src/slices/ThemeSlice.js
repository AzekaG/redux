import { createSlice } from "@reduxjs/toolkit";


//переменная первоначального состояния
const initialState = { value: 'light' };
//reducers - методы, которые работают с состояниями
//toggleTheme - функция, которая изменяет состояние

//создаем какой-то срез / кусок /
//у каждого слайса должно быть уникальное название

//может быть сколько угодно reducerov.
//по умолчанию функции редьюсеров не экспортиру.тся. Нужно експортировать вручную



//все функции редьюсеров попадают в ThemeSlice.actions
export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        },
        //параметры приходят в параметр action и записываются в свойства payload
        setTheme: (state, action) => {
            state.value = action.payload
        }
    }
});


//экспортируем функции
export const { toggleTheme, setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;