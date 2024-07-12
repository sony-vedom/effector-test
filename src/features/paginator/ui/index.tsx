import {type FC} from "react";
import styled from "styled-components";
import {useUnit} from "effector-react";
import * as model from "../model";
import {pageClicked} from "../model";

const PaginatorContainer = styled.div(() => ({
    display: "flex",
    gap: "10px",
    justifyItems: "center",
    fontSize: "1.5rem",
    margin: "0 auto",
    flexWrap: "wrap"
}))


const Page = styled.button<{ $isSelected?: boolean }>((props) => ({
    color: `${props.$isSelected ? props.theme.primary : props.theme.white}`,
    fontWeight: `${props.$isSelected ? 700 : 400}`,
    fontSize: "1.4rem",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent"
}))

export const Paginator: FC = () => {
    const [searchPage, pageCount] = useUnit([model.$page, model.$pageCount]);
    return (
        <PaginatorContainer>
            {pageCount && Array.from({length: pageCount}, (_, i) => {
                const n = i + 1
                return (
                    <Page key={i} onClick={() => pageClicked(n)} $isSelected={searchPage === n}>{n}</Page>
                )
            })}
        </PaginatorContainer>
    )
}
