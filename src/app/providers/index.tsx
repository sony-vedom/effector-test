import {type FC} from "react";
import {AppThemeProvider} from "./theme";
import {AppRouterProvider} from "@/app/providers/router";

export const Providers: FC = () => {
    return (
        <AppThemeProvider>
            <AppRouterProvider/>
        </AppThemeProvider>
    )
}
