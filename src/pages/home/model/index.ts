import {routes} from "@/shared/config/routes";
import {redirect} from "atomic-router";

export const currentRoute = routes.home;

redirect({
    clock: currentRoute.opened,
    route: routes.search_repo,
})