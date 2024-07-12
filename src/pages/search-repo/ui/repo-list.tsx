import styled from "styled-components";
import type {FC} from "react";
import {useList, useUnit} from "effector-react";
import {$repos, $statusSearchRepo, $statusViewRepo} from "../model";
import {RepoCard} from "@/entities/repo";
import {Loading} from "@/shared/ui/loader";
import {$repositoryCount} from "@/features/paginator/model";

const RepoResultContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const RepoList: FC = () => {
    const [
        statusSearch,
        statusView,
        repoCount
    ] = useUnit([$statusSearchRepo, $statusViewRepo, $repositoryCount]);
    const results = useList($repos, {
        getKey: ({repo}) => repo.id,
        fn: ({repo}) => {
            return (
                <RepoCard {...repo}/>
            )
        },
    })
    if (statusSearch === "pending" || statusView === "pending") {
        return <RepoResultContainer><Loading/></RepoResultContainer>
    }
    if (!repoCount && (statusSearch === "done" || statusView === "done")) {
        return <RepoResultContainer>Не найдено</RepoResultContainer>
    }

    return results
}
