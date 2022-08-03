
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/state/todoSlice";
import counterSlice from "./counter/state/counterSlice";
import postSlice from "./post/state/postSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
        post: postSlice,

    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch