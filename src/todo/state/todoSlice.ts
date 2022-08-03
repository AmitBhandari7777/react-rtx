import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Todo {
    id: number,
    title: string,
}

export interface TodoState {
    count: number;
    todos: [];
}

const initialState = {
    count: 0,
    todos: [] as Todo[],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        todoAdd: (state, action) => {

            const todo: Todo = {
                id: state.count + 1,
                title: action.payload,
            };

            state.todos.push(todo);
            state.count += 1;

        },
        todoRemove: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);

        },
    },
})


export const { todoAdd,todoRemove } = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodo = (state: RootState) => state.todo;
