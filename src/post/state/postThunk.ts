import { createAsyncThunk } from "@reduxjs/toolkit";
import postServices from "../services/postServices";
import { PostAddRequest, PostUpdateRequest } from "./postInterface";

export const postListThunk = createAsyncThunk("post/list", async () => {
    try {
        console.log("requesting GET/post API");

        const response = await postServices.getPostList();
        return response.data;
    } catch (error) {
        console.log("GET/post API Error :", error);
    }
});

export const postAddThunk = createAsyncThunk("post/add", async (data: PostAddRequest) => {
    try {
        console.log("calling POST/post API...");

        const response = await postServices.addPost(data);
        return response.data;
    } catch (error) {
        console.log("POST/post API Error :", error);
    }
});

export const postUpdateThunk = createAsyncThunk("post/update", async (data: PostUpdateRequest) => {

    try {
        console.log("calling PUT/post API...");
        const response = await postServices.updatePost(data);
        return response.data;
    } catch (error) {
        console.log("PUT/post API Error :", error);
    }
});


export const postDeleteThunk = createAsyncThunk("post/delete", async (id: number) => {

    try {
        console.log("calling DEL/post API...");
        const response = await postServices.deletePost(id);
        return response.data;
    } catch (error) {
        console.log("DEL/post api Error :", error);
    }
});


