import { useCallback, useEffect, useState } from "react";
import { IDeckFilter } from "../../IDeck";
import { useFetch } from "@common";
import { getDecksRoute } from "@routes/deck";
import { responseToState } from "@mappers/getDeckListMapper";
import { objectToQuery } from "@utils/fetchUtils";
import { IDeckSummary, IDeckSummaryResponse } from "@typings/interfaces";

export const useDeckList = (deckFilter: IDeckFilter | undefined) => {
    const [deckList, setDeckList] = useState<IDeckSummary[]>();
    const [getDeckListState, { get }] = useFetch();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const getDeckList = useCallback(() => {
        const query = deckFilter ? `?${objectToQuery({ ...deckFilter })}` : "";

        return get<IDeckSummaryResponse[]>(getDecksRoute(query)).then((response) => {
            if (response) {
                setDeckList(responseToState(response));
            }
        });
    }, [deckFilter, get]);

    useEffect(() => {
        getDeckList();
    }, [getDeckList]);

    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        getDeckList().then(() => setIsRefreshing(false));
    }, [getDeckList]);

    useEffect(() => {
        getDeckList();
    }, [getDeckList]);

    return {
        deckList,
        getDeckListState,
        onRefresh,
        isRefreshing,
    };
};
