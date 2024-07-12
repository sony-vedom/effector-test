import {controls, routes} from "@/shared/config/routes";
import {querySync} from "atomic-router";
import {model as queryModel} from "@/features/search-form";
import {model as paginatorModel} from "@/features/paginator";
import {attach, createStore, sample} from "effector";
import {debounce} from "patronum";
import {Repo, repoApi} from "@/entities/repo"
import {viewerApi} from "@/entities/viewer"
import {$repositoryCount} from "@/features/paginator/model";
import { status } from 'patronum';

export const currentRoute = routes.search_repo;

querySync({
    source: {q: queryModel.$searchQuery, page: paginatorModel.$page},
    route: currentRoute,
    controls,
});

const searchFx = attach({
    source: {q: queryModel.$searchQuery, page: paginatorModel.$page},
    effect: repoApi.searchFx
})

const getViewerRepoFx = attach({
    effect: viewerApi.getViewerReposFx
})

export const $statusSearchRepo = status(searchFx);
export const $statusViewRepo = status(getViewerRepoFx);

sample({
    clock: debounce({
      source: queryModel.$searchQuery,
      timeout: 500,
    }),
    target: searchFx,
    filter: (q) => !!q
})

sample({
    clock: paginatorModel.pageClicked,
    target: searchFx,
})

sample({
    clock: debounce({
        source: currentRoute.$query,
        timeout: 500,
    }),
    target: getViewerRepoFx,
    filter: ({q}) => !q
})



export const $repos = createStore<{ repo: Repo }[]>([]);

$repos
    .on([searchFx.doneData, getViewerRepoFx.doneData], (_, payload) => {
        if ("repos" in payload) {
            return payload.repos ?? null
        }
        return payload.repositories.nodes.map(el => ({repo: el}))
    })

$repositoryCount.on([searchFx.doneData, getViewerRepoFx.doneData], (_, payload) => {
    if ("repositories" in payload) {
        return payload.repositories.repositoryCount
    }
    return payload.repositoryCount
})