import { useCallback, useEffect, useState } from "react";
import { IDeck } from "../IDeck";
import { useFetch } from "../../../common";
import { DECK_ROUTE } from "../../../route";
import { IDeckResponse, responseToState } from "../../../mappers/getDeckMapper";

export const useDeckList = () => {
    const [deckList, setDeckList] = useState<IDeck[]>();
    const [getDeckListState, { get }] = useFetch();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const getDeckList = useCallback(
        () =>
            get<IDeckResponse[]>(DECK_ROUTE).then((response) => {
                if (response) {
                    setDeckList(responseToState(response));
                }
            }),
        [get]
    );

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
