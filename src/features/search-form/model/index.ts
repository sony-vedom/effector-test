import {createEvent, createStore} from "effector"

export const $searchQuery = createStore<string>('');
export const searchQueryChanged = createEvent<string>();

$searchQuery
    .on(searchQueryChanged, (_, searchQuery) => searchQuery)

