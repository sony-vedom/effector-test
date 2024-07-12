import styled from "styled-components";
import {Paper} from "@/shared/ui/paper";
import {GithubLinkButton} from "@/shared/ui/github-link-button";
import {Avatar} from "@/shared/ui/avatar";
import {Stars} from "./stars";
import {RepoDetail} from "@/entities/repo";
import {FC} from "react";
import {Date} from "@/entities/repo/ui/date";
import {Link} from "atomic-router-react";
import {Description} from "@/entities/repo/ui/description";
import {LanguagesList} from "@/entities/repo/ui/languages";

const CardHeaderContainer = styled.div(() => ({
    width: "100%",
    display: "flex",
    gap: "20px",
    justifyContent: "space-around",
    "& *": {
        verticalAlign: "middle",
        lineHeight: 2
    }
}))

const AvatarArea = styled.div(() => ({
    display: "grid",
    gap: "10px",
    justifyItems: "center"
}))

const DescriptionArea = styled.div(() => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    "& > div": {
        padding: "20px"
    },
    "& div:first-child": {
        borderRight: "1px solid #c5c5c5"
    }
}))

export const RepoCardDetail: FC<RepoDetail> = (props) => {
    const {stargazerCount, pushedAt, url, name, owner, languages, description} = props
    return (
        <Paper>
            <CardHeaderContainer>
                <Stars count={stargazerCount}/>
                <h5>{name}</h5>
                <Date date={pushedAt}/>
            </CardHeaderContainer>
            <AvatarArea>
                <GithubLinkButton url={url}/>
                <Avatar userName={owner.login} imageUrl={owner.avatarUrl}/>
                <Link to={owner.url}>{owner.login}</Link>
            </AvatarArea>
            <DescriptionArea>
                <Description text={description}/>
                <LanguagesList {...languages}/>
            </DescriptionArea>
        </Paper>
    )
}

