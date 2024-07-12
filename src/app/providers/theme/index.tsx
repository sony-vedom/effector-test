import {FC, PropsWithChildren} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "@/shared/config/theme";

export const AppThemeProvider: FC<PropsWithChildren> = (props) => {
    const {children} = props
    return  (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
