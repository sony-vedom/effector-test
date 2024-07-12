import axios from "axios";
import {API_URL, TOKEN} from "@/shared/config/api";
import {createEffect} from "effector";

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `bearer ${TOKEN}`,
        'Content-Type': 'application/json',
    },
})

interface Request {
    body: unknown;
}

export enum ERROR_TYPE {
    NOT_FOUND = "NOT_FOUND"
}

export interface ErrorResponse {
    type: `${ERROR_TYPE}`,
    path: [
        string
    ],
    locations: [
        {
            line: number,
            column: number
        }
    ],
    message: string
}

export const requestFx = createEffect<Request, any>((request) => {
    return axiosInstance({
        method: 'POST',
        data: request.body,
    })
        .then((response) => {
            if (response.data.errors) {
                return Promise.reject(response)
            }
            return response.data.data
        })
        .catch((response) => {
            return Promise.reject(response.data.errors)
        });
})
