import type {FC} from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const NotFoundPage: FC = () => {
    return (
        <StyledWrapper>
            Страница не найдена - 404
        </StyledWrapper>
    )
}