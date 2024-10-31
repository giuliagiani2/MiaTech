import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        setTodo: (state, { payload }) => {
            return payload;
        },
        addTodo: (state, { payload }) => {
            state.push(payload);
        },
        removeTodo: (state, { payload }) => {
            return state.filter(todo => todo.id !== payload);
        }
    }
});

export const { setTodo, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;