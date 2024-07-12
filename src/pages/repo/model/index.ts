import {routes} from "@/shared/config/routes"
import {attach, createStore, split} from "effector";
import {repoApi, RepoDetail} from "@/entities/repo"
import {chainRoute, redirect} from "atomic-router";
import {ERROR_TYPE} from "@/shared/api";

export const currentRoute = routes.repo;

const getRepoFx = attach({effect: repoApi.getRepoFx})

chainRoute({
    route: currentRoute,
    beforeOpen: {
        effect: getRepoFx,
        mapParams: (params) => ({
            repo_name: params.params.repoName,
            repo_owner_name: params.params.userName,
        }),
    },
})

export const $repoDetail = createStore<RepoDetail | null>(null);

$repoDetail.on(getRepoFx.doneData, (_, payload) => {
    return payload ?? null
});

split({
    source: getRepoFx.failData,
    match: {
        404: (error) => {
            return error[0].type === ERROR_TYPE.NOT_FOUND
        },
    },
    cases: {
        404: redirect({ route: routes.not_found }),
    }
})