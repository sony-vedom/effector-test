import styled from "styled-components";
import {GithubLinkButton} from "@/shared/ui/github-link-button";
import {Paper} from "@/shared/ui/paper";
import {Stars} from "./stars";
import {FC} from "react";
import {Repo} from "@/entities/repo";
import {Link} from "atomic-router-react";
import {routes} from "@/shared/config/routes";
import {Date} from "@/entities/repo/ui/date";

const CardContainer = styled.div(() => ({
    width: "100%",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    "& *": {
        verticalAlign: "middle",
        lineHeight: 2
    }
}))

const RepoName = styled.div((props) => ({
    "& a": {
        color: `${props.theme.primary}`,
        cursor: "pointer",
    }
}))

export const RepoCard: FC<Repo> = (props) => {
    const {name, owner, url, stargazerCount, pushedAt} = props
    return (
        <Paper>
            <CardContainer>
                <RepoName>
                    <Link to={routes.repo} params={{repoName: name, userName: owner.login}}>{name}</Link>
                </RepoName>
                <Stars count={stargazerCount}/>
                <Date date={pushedAt}/>
                <GithubLinkButton url={url}/>
            </CardContainer>
        </Paper>
    )
}
