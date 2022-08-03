import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Post, PostAddRequest, PostState, PostUpdateRequest } from "./postInterface";
import { postAddThunk, postDeleteThunk, postListThunk, postUpdateThunk } from "./postThunk";


const initialState = {
    count: 0,
    add: {} as PostAddRequest,
    list: [] as Post[],
    update: {} as PostUpdateRequest,
    status: "idle",
}


const createPostListSlice = (builder: ActionReducerMapBuilder<PostState>) => {
    builder
        .addCase(postListThunk.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(postListThunk.fulfilled, (state, action) => {
            state.status = "success";
            const pl: Post[] = action.payload as Post[];
            state.list = pl;
            state.count = state.list.length;
        })
        .addCase(postListThunk.rejected, (state, action) => {
            state.status = "failed";
        });

}

const createPostAddSlice = (builder: ActionReducerMapBuilder<PostState>) => {
    builder.addCase(postAddThunk.pending, (state, action) => {
        state.status = "loading";
    })
    builder.addCase(postAddThunk.fulfilled, (state, action) => {
        const stateForList = state.list as Post[];
        const payload = action.payload as Post;
        stateForList.splice(0, 0, payload);
        state.count += 1;
        state.status = "success";
    })
    builder.addCase(postAddThunk.rejected, (state, action) => {
        state.status = "failed";
    });
}


const createPostUpdateSlice = (builder: ActionReducerMapBuilder<PostState>) => {
    builder.addCase(postUpdateThunk.pending, (state, action) => {
        state.status = "idle";
    })
    builder.addCase(postUpdateThunk.fulfilled, (state, action) => {
        const stateForList = state.list as Post[];
        const payload = action.payload as Post;
        const updatedPostIndex = stateForList.findIndex(item => item.id === payload.id);
        stateForList.splice(updatedPostIndex, 1, payload);
        state.status = "success";
    })
    builder.addCase(postUpdateThunk.rejected, (state, action) => {
        state.status = "failed";
    });
}

const createPostDeleteSlice = (builder: ActionReducerMapBuilder<PostState>) => {
    builder.addCase(postDeleteThunk.pending, (state, action) => {
        state.status = "idle";
    })
    builder.addCase(postDeleteThunk.fulfilled, (state, action) => {
        const stateForList = state.list as Post[];
        const payload = action.payload as Post;
        const updatedPostIndex = stateForList.findIndex(item => item.id === payload.id);
        stateForList.splice(updatedPostIndex, 1);
        state.status = "success";
    })
    builder.addCase(postDeleteThunk.rejected, (state, action) => {
        state.status = "failed";
    });
}


export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        createPostListSlice(builder)
        createPostAddSlice(builder)
        createPostUpdateSlice(builder)
        createPostDeleteSlice(builder)
    },
});


export default postSlice.reducer;
export const selectPost = (state: RootState) => state.post;
export const selectPostAdd = (state: RootState) => state.post;
