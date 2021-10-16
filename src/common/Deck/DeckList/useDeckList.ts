import { useCallback, useEffect, useState } from "react";
import { useFetch } from "@common";
import { getDecksRoute } from "@routes";
import { responseToState } from "@mappers/getDeckListMapper";
import { objectToQuery } from "@utils/fetchUtils";
import { IDeckFilter, IDeckSummary, IDeckSummaryResponse } from "@typings/interfaces";
import { useIsFocused } from "@react-navigation/native";

export const useDeckList = (publicDecksQuery?: IDeckFilter) => {
    const [deckList, setDeckList] = useState<IDeckSummary[]>();
    const [deckFilter, setDeckFilter] = useState(publicDecksQuery);
    const [getDeckListState, { get }] = useFetch();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const isScreenFocused = useIsFocused();

    const getDeckList = useCallback(() => {
        const query = deckFilter ? `?${objectToQuery({ ...deckFilter })}` : "";

        return get<IDeckSummaryResponse[]>(getDecksRoute(query)).then((response) => {
            if (response) {
                setDeckList(responseToState(response));
            }
        });
    }, [deckFilter, get]);

    useEffect(() => {
        if (isScreenFocused) {
            getDeckList();
        }
    }, [isScreenFocused, getDeckList]);

    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        getDeckList().then(() => setIsRefreshing(false));
    }, [getDeckList]);

    return {
        deckList,
        deckFilter,
        setDeckFilter,
        getDeckListState,
        onRefresh,
        isRefreshing,
    };
};
