import {createRoute, createRouterControls} from "atomic-router"

export enum ROUTES {
    HOME = "/",
    REPO = "/repository/:userName/:repoName",
    SEARCH_REPO = "/search-repositories",
    NOT_FOUND = "/not_found",
}

export const routes = {
    home: createRoute(),
    repo: createRoute<{ repoName: string, userName: string }>(),
    search_repo: createRoute(),
    not_found: createRoute(),
};

export const mappedRoutes = [
    { path: ROUTES.HOME, route: routes.home },
    { path: ROUTES.REPO, route: routes.repo },
    { path: ROUTES.SEARCH_REPO, route: routes.search_repo },
    { path: ROUTES.NOT_FOUND, route: routes.not_found },
];

export const controls: ReturnType<typeof createRouterControls> = createRouterControls();
