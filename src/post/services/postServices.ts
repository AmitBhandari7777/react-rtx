import { deleteRequest, getRequest, postRequest, putRequest } from "../api/axiosApi"
import { PostAddRequest, PostUpdateRequest } from "../state/postInterface";


const postServices = {

    async getPostList() {
        const response = await getRequest("posts");
        return response;
    },

    async addPost(postAddRequest: PostAddRequest) {
        const response = await postRequest("posts",
            postAddRequest,
        );
        return response;
    },

    async updatePost(postUpdateRequest: PostUpdateRequest) {
        const response = await putRequest(`posts/${postUpdateRequest.id}`,
            postUpdateRequest
        );
        return response;
    },

    async deletePost(id: number) {
        const response = await deleteRequest(`posts/${id}`)
        return response;
    }
}

export default postServices;