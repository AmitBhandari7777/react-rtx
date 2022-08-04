
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/state/todoSlice";
import counterSlice from "./counter/state/counterSlice";
import postSlice from "./post/state/postSlice";
import { productApi } from "./product/query/productApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        //these redux slice/reducer is connected to AsyncThunk
        counter: counterSlice,
        todo: todoSlice,
        post: postSlice,
        //these redux slice/reducer is connected to redux query
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productApi.middleware,
        ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch