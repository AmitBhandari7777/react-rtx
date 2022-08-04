import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Todo } from "./todoTypes";


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
            state.count -= 1;
        },
    },
})


export const { todoAdd, todoRemove } = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodo = (state: RootState) => state.todo;
