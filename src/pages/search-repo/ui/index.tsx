import {type FC} from "react";
import {SearchForm} from "@/features/search-form";
import {Paginator} from "@/features/paginator/ui";
import {RepoList} from "./repo-list.tsx";

export const SearchRepoPage: FC = () => {
    return (
        <>
            <SearchForm/>
            <RepoList/>
            <Paginator/>
        </>
    )
}
