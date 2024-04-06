import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: string,
    title: string,
    completed: boolean,
}

type TodoState = {
    value: Array<Todo>,
}

const initialState: TodoState = {
    value: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.value.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },

        toggleTodo: (state, action: PayloadAction<string>) => {
            const toggledTodo = state.value.find(item => item.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },

        deleteTodo: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

