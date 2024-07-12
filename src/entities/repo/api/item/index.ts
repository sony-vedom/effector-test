import {createEffect} from "effector";
import {type RepoDetail} from "@/entities/repo";
import {ErrorResponse, requestFx} from "@/shared/api";
import {repoMapper} from "./repo.map.ts";
import {RepoParamsQuery} from "./repo.query.ts";

export const getRepoFx = createEffect<RepoParamsQuery, RepoDetail, ErrorResponse[]>((
    {
        languages_count = 10,
        repo_owner_name,
        repo_name
    }
) => {
    return requestFx({
        body: {
            query: `
                   query getUser(
                   $name: String!, 
                  $owner: String!, 
                  $first: Int) {
                  repository(name: $name, owner: $owner) {
                    id
                    name
                    url
                    stargazerCount
                    pushedAt
                    owner {
                      login
                      url
                      avatarUrl
                    }
                    languages(first: $first) {
                      totalCount
                      nodes {
                        name
                      }
                  
                    }
                    description
                  }
                }
            `,
            variables: repoMapper({languages_count, repo_name, repo_owner_name})
        }
    }).then(data => data.repository).catch(e => Promise.reject(e));
});
