import axios from "axios";
import {API_URL} from "@/shared/config/api";
import {createEffect} from "effector";

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `bearer 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`,
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
