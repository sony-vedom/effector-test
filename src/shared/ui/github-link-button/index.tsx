import GithubLogo from '@/shared/assets/svg/gihub.svg?react'
import {FC} from "react";

interface GithubLinkButtonProps {
    url: string
}

export const GithubLinkButton: FC<GithubLinkButtonProps> = (props) => {
    const {url} = props
    return (
        <a href={url}>
            <GithubLogo/>
        </a>
    )
}
