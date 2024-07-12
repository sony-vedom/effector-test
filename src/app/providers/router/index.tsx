import {sample} from "effector";
import {appStarted} from "@/shared/config/initialization";
import {controls, mappedRoutes} from "@/shared/config/routes";
import {createHistoryRouter} from "atomic-router";
import { createBrowserHistory } from "history";
import {createRoutesView, RouterProvider} from "atomic-router-react";
import {RepoRoute} from "@/pages/repo";
import {HomeRoute} from "@/pages/home";
import {SearchRepoRoute} from "@/pages/search-repo";
import {MainLayout} from "@/widgets/layouts/main.tsx";
import {NotFoundRoute} from "@/pages/not-found";

const router = createHistoryRouter({
    routes: mappedRoutes,
    controls,
});

sample({
    clock: appStarted,
    fn: () => createBrowserHistory(),
    target: router.setHistory,
});

export const Pages = createRoutesView({
    routes: [RepoRoute, HomeRoute, SearchRepoRoute, NotFoundRoute],
});

export const AppRouterProvider = () => {
    return (
        <RouterProvider router={router}>
            <MainLayout>
                <Pages/>
            </MainLayout>
        </RouterProvider>
    )
}
