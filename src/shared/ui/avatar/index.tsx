import styled from "styled-components";
import {FC} from "react";

export const AvatarWrapper = styled.div((props) => ({
    borderRadius: "50%",
    backgroundColor: "#c5c5c5",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `2px solid transparent`,
    transition: "borderColor 0.35s",
    "&:hover, &:focus, &:focus-visible": {
        borderColor: `${props.theme.primary}`,
        outline: "none",
    }
}))

export const AvatarImage = styled.img(() => ({
    borderRadius: "inherit",
    width: "inherit",
    height: "inherit"
}))

interface AvatarProps {
    imageUrl?: string
    userName: string
}


export const Avatar: FC<AvatarProps> = (props) => {
    const {imageUrl, userName} = props
    return (
        <AvatarWrapper tabIndex={3}>
            {
                imageUrl
                    ? <AvatarImage alt={userName} src={imageUrl}/>
                    : userName[0].toUpperCase()
            }
        </AvatarWrapper>
    )
}
