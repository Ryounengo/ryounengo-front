import { useCallback, useEffect, useState } from "react";
import { IDeck, IDeckFilter } from "../../IDeck";
import { useFetch } from "../../../../common";
import { getDeckRoute } from "../../../../route";
import { IDeckResponse, responseToState } from "../../../../mappers/getDeckMapper";
import { objectToQuery } from "../../../../utils/fetchUtils";

export const useDeckList = (deckFilter: IDeckFilter | undefined) => {
    const [deckList, setDeckList] = useState<IDeck[]>();
    const [getDeckListState, { get }] = useFetch();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const getDeckList = useCallback(() => {
        const query = deckFilter ? `?${objectToQuery({ ...deckFilter })}` : "";

        return get<IDeckResponse[]>(getDeckRoute(query)).then((response) => {
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
