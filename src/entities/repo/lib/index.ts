import {ITEMS_PER_PAGE} from "@/shared/config/api";

export const getPreparedRepoCount = (repoCount: number) => {
    const countPage = Math.ceil(repoCount / ITEMS_PER_PAGE)
    return countPage > 100 ? 100 : countPage
}
