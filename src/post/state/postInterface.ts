

export interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface PostListResponse {
    count: number,
    list: [];
    status: "idle" | "loading" | "success" | "failed";
}

export interface PostAddRequest {
    userId: number,
    title: string,
    body: string
}

export interface PostAddResponse {
    post: Post,
    stastus: "idle" | "loading" | "success" | "failed";
}

export interface PostUpdateRequest {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface PostUpdateResponse {
    post: Post,
    stastus: "idle" | "loading" | "success" | "failed";
}
export interface PostState {
    count: number,
    add: PostAddRequest,
    list: Post[],
    update: PostUpdateRequest,
    status: string
}

