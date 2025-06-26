import type {SearchDragRepository} from "../domain/SearchDragRepository.ts";
import type {Drag} from "../domain/Drag.ts";
import type {SearchOptions} from "../domain/SearchOptions.ts";
import {mockDragSearchResult, mockDragSearchWithFilterResult} from "./mock_data.ts";

const RECENT_SEARCH_KEY = "recent_search";

export const repository: SearchDragRepository = {
    addToRecentSearch(query: string): Array<string> {
        const searchArray = this.getRecentSearch();
        searchArray.push(query);
        localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify(searchArray));
        return searchArray;
    },

    getRecentSearch(): Array<string> {
        const recentString = localStorage.getItem(RECENT_SEARCH_KEY) || "[]";
        return JSON.parse(recentString);
    },

    searchByName(query: string): Promise<Array<Drag>> {
        console.log("Search by name - ",query)
        return Promise.resolve(mockDragSearchResult);
    },

    searchWithFilter(query: string, options: SearchOptions): Promise<Array<Drag>> {
        console.log("Search by name and filter - ", query, JSON.stringify(options))
        return Promise.resolve(mockDragSearchWithFilterResult);
    }

}
