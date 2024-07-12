import {createEffect} from "effector";
import {Repo} from "@/entities/repo/@x";
import {Pagination, paginationMapper, requestFx} from "@/shared/api";
import {ITEMS_PER_PAGE} from "@/shared/config/api";

export interface RepoSearchResult {
    repositories: {
        repositoryCount: number
        nodes: Repo[]
    }
}

export const getViewerReposFx = createEffect<Pagination, RepoSearchResult>((
    {
        page = 1,
        count = ITEMS_PER_PAGE
    }
) => {
    return requestFx({
        body: {
            query: `
             query getUserRepo(
                    $last: Int!,
                    $after: String,
                  ) {
               viewer {
                        repositories(last: $last, after: $after) {
                          repositoryCount:totalCount
                          nodes {
                            id
                            name
                            stargazerCount
                            pushedAt
                            url
                            owner {
                              login
                            }
                          }
                        }
                      }
             }
            `,
            variables: paginationMapper({page, count})
        }
    }).then(data => data.viewer).catch(e => Promise.reject(e));
});
