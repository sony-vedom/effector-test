import {RepoParamsQuery} from "./repo.query.ts";
import {RepoParamsDTO} from "./repo.dto.ts";

export const repoMapper = (model: RepoParamsQuery): RepoParamsDTO => {
    const queries: RepoParamsDTO = {
        name: model.repo_name,
        owner: model.repo_owner_name
    }
    if (model.languages_count) {
        queries.first = model.languages_count
    }
    return queries
}
