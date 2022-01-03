import { useState } from "react";
import { getDecksRoute } from "@routes";
import { responseToState } from "@mappers/getDeckListMapper";
import { objectToQuery } from "@utils/fetchUtils";
import { IDeckFilter, IDeckSummary, IDeckSummaryResponse } from "@typings/interfaces";
import { useGetApi } from "@hooks/api";
import { defaultPagination } from "@utils/pagination";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";

export const useDeckList = (publicDecksQuery?: IDeckFilter) => {
    const [deckFilter, setDeckFilter] = useState(publicDecksQuery);
    const query = `?${objectToQuery(deckFilter ? { ...deckFilter } : { ...defaultPagination, isReviewed: true })}`;

    const {
        data: deckList,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
        mutate,
    } = useGetApi<IPaginatedResponse<IDeckSummaryResponse[]>, IPaginatedResponse<IDeckSummary[]>>(
        getDecksRoute(query),
        { mapper: responseToState }
    );

    return {
        deckList,
        deckFilter,
        setDeckFilter,
        isValidating,
        error,
        refresh,
        isRefreshLoading,
        mutate,
    };
};
