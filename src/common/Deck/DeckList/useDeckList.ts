import { useEffect, useState } from "react";
import { getDecksRoute } from "@routes";
import { responseToState } from "@mappers/getDeckListMapper";
import { objectToQuery } from "@utils/fetchUtils";
import { IDeckFilter, IDeckSummary, IDeckSummaryResponse } from "@typings/interfaces";
import { useGetApi } from "../../hooks/api/useGetApi";

export const useDeckList = (publicDecksQuery?: IDeckFilter) => {
    const [deckList, setDeckList] = useState<IDeckSummary[]>();
    const [deckFilter, setDeckFilter] = useState(publicDecksQuery);

    const query = deckFilter ? `?${objectToQuery({ ...deckFilter })}` : "";
    const {
        data: deckResponse,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
    } = useGetApi<IDeckSummaryResponse[]>(getDecksRoute(query));

    useEffect(() => {
        if (deckResponse) {
            setDeckList(responseToState(deckResponse));
        }
    }, [deckResponse]);

    return {
        deckList,
        deckFilter,
        setDeckFilter,
        isValidating,
        error,
        refresh,
        isRefreshLoading,
    };
};
