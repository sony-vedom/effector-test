import {ITEMS_PER_PAGE} from "@/shared/config/api";

export interface Pagination {
    page?: number
    count?: number
}

export interface PaginationDTO {
    last?: number
    startCursor?: string
}

export const paginationMapper = (model: Pagination): PaginationDTO => {
    const queries: PaginationDTO = {}
    if (model.page) {
        const offsetStartCursor = `cursor:${ITEMS_PER_PAGE * (model.page - 1)}`
        queries.startCursor = btoa(String(offsetStartCursor))
    }
    if (model.count) {
        queries.last = model.count
    }
    return queries
}
