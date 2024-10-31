import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        setTodo: (state, { payload }) => {
            return payload;
        },
        toggleTodo: (state, { payload }) => {
            const todo = state.find(item => item.id === payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { setTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;