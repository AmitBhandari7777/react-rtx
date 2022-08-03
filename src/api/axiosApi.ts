import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const axiosClient = axios.create({

    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    }

});


export const getRequest = (URL: string) => {
    const response = axiosClient.get(`/${URL}`);
    console.log(response);
    return response;
};

export const postRequest = (URL: string, payload: unknown) => {

    const response = axiosClient.post(`/${URL}`, payload);
    console.log(response);
    return response;

}

export const putRequest = (URL: string, payload: unknown) => {

    const response = axiosClient.put(`/${URL}`, payload);
    console.log(response);
    return response;

}

export const deleteRequest = (URL: string) => {
    const response = axiosClient.put(`/${URL}`);
    console.log(response);
    return response;
}