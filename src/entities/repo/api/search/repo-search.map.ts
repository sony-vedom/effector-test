import {QuerySearchParamsDTO, RepoSearchParamsDTO} from "./repo-search.dto.ts";
import {QuerySearchParams, RepoSearchParamsQuery} from "./repo-search.query.ts";
import {paginationMapper} from "@/shared/api";

export const querySearchMapper = (model: QuerySearchParams): QuerySearchParamsDTO => {
    const queries: QuerySearchParamsDTO = {}
    if (model.q) {
        queries.query = model.q
    }
    return queries
}

export const repoMapper = (model: RepoSearchParamsQuery): RepoSearchParamsDTO => {
    return {
        ...querySearchMapper(model),
        ...paginationMapper(model)
    }
}
