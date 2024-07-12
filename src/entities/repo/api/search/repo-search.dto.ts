import {PaginationDTO} from "@/shared/api";

 export interface QuerySearchParamsDTO {
     query?: string
 }

export type RepoSearchParamsDTO = PaginationDTO & QuerySearchParamsDTO
