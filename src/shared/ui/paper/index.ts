import styled from "styled-components";

export const Paper = styled.div((props) => ({
    backgroundColor: "#ffffff",
    borderRadius: `${props.theme.borderRadius}`,
    color: "#000",
    padding: "20px",
    display: "grid",
    gap: "20px"
}))
