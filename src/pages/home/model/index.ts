import {routes} from "@/shared/config/routes";
import {redirect} from "atomic-router";

export const currentRoute = routes.home;

redirect({
    route: routes.search_repo,
    clock: currentRoute.opened,
})
