import {createEffect} from "effector";
import {Repo} from "@/entities/repo";
import {requestFx} from "@/shared/api";
import {ITEMS_PER_PAGE} from "@/shared/config/api";
import {RepoSearchParamsQuery} from "@/entities/repo/api/search/repo-search.query.ts";
import {repoMapper} from "@/entities/repo/api/search/repo-search.map.ts";

export interface RepoSearchResult {
    repositoryCount: number
    repos: {
        repo: Repo
    }[]

}

export const searchFx = createEffect<RepoSearchParamsQuery, RepoSearchResult>((
    {
        q,
        page = 1,
        count = ITEMS_PER_PAGE
    }
) => {
    return requestFx({
        body: {
            query: `
            query searchRepo($query: String!, $startCursor: String, $last: Int) {
                search(
                     type:REPOSITORY, 
                     query: $query, 
                     last: $last, 
                     after:$startCursor
                     ) {
                    repositoryCount
                    repos: edges {
                      repo: node {
                        ... on Repository {
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
              }
            `,
            variables: repoMapper({q, page, count})
        }
    }).then(data => data.search).catch(e => Promise.reject(e));
});
