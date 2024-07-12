import {combine, createEvent, createStore} from "effector";
import {getPreparedRepoCount} from "@/entities/repo";

export const $page = createStore<number>(1);

export const pageClicked = createEvent<number>();

$page
    .on(pageClicked, (_, page) => page)

export const $repositoryCount = createStore<number | null>(null)

export const $pageCount = combine($repositoryCount, (repoCount) => {
    return repoCount ? getPreparedRepoCount(repoCount) : null
})
