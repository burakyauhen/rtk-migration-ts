import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },

        toggleTodo: (state, action) => {
            const toggledTodo = state.value.find(item => item.id === action.payload);
            toggledTodo.completed = !toggledTodo.completed;
        },

        deleteTodo: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

