import styled from "styled-components";
import {type FC} from "react";
import {useUnit} from "effector-react";
import {Input} from "@/shared/ui/input";
import * as model from "../model";

const SearchContainer = styled.div({
    width: "80%",
    margin: "0 auto",
    display: "flex",
    gap: "10px"
})

export const SearchForm: FC = () => {
    const [searchQuery, onSearchChange ] = useUnit([model.$searchQuery, model.searchQueryChanged]);
    return (
        <SearchContainer>
            <Input value={searchQuery}
                   onChange={(e) => onSearchChange(e.target.value)}
                   placeholder="Поиск..."
            />
        </SearchContainer>
    )
}
