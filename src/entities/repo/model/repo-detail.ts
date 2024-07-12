import {Repo} from "./repo.ts";

export interface Language {
    name: string
}

export interface Languages {
    totalCount: number,
    nodes: Language[]
}

export interface RepoDetail extends Repo {
    owner: {
        login: string,
        url: string,
        avatarUrl: string
    },
    languages: Languages,
    description: string | null
}
