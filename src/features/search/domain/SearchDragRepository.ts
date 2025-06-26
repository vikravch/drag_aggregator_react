import type {Drag} from "./Drag.ts";
import type {SearchOptions} from "./SearchOptions.ts";

export type SearchDragRepository = {
    searchByName: (query: string) => Promise<Array<Drag>>,
    searchWithFilter: (
        query: string,
        options: SearchOptions) => Promise<Array<Drag>>,
    addToRecentSearch: (query: string) => Array<string>,
    getRecentSearch: () => Array<string>
}
