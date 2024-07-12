import type {FC} from "react";
import {RepoCardDetail} from "@/entities/repo";
import {useUnit} from "effector-react";
import * as model from "../model";

export const RepoPage: FC = () => {
    const [repo] = useUnit([
        model.$repoDetail
    ])
    return (
        <>
            {repo && <RepoCardDetail {...repo}/>}
        </>
    )
}