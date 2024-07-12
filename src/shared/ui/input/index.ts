import styled from "styled-components";


export const Input = styled
    .input((props) => (
        {
            borderRadius: `${props.theme.borderRadius}`,
            padding: "0.6em 0.5em",
            transition: "borderColor 0.25s",
            width: "100%",
            border: `2px solid ${props.theme.primaryLight}`,
            "&:hover, &:focus, &:focus-visible": {
                borderColor: `${props.theme.primary}`,
                outline: "none"
            }
        }
    ))
