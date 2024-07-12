import {Pagination} from "@/shared/api";

export interface QuerySearchParams {
    q?: string
}

export type RepoSearchParamsQuery = Pagination & QuerySearchParams

