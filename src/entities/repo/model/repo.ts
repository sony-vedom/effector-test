export interface Repo {
    id: string
    name: string
    stargazerCount: number
    pushedAt: string
    url: string
    owner: {
        login: string
    }
}
