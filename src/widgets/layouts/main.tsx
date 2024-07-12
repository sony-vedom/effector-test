import styled from "styled-components";
import {type FC, PropsWithChildren} from "react";

const Main = styled.main({
    margin: "0 auto",
    padding: "2rem 0.8rem",
    width: "calc(100vw - 32px)",
    maxWidth: 800,
    display: "grid",
    gap: "1em",
})

export const MainLayout: FC<PropsWithChildren> = (props) => {
    const {children} = props
    return (
        <Main>
            {children}
        </Main>
    )
}
