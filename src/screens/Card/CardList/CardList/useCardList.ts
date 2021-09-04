import { useCallback, useEffect, useState } from "react";
import { useFetch } from "@common";
import { objectToQuery } from "@utils/fetchUtils";
import { ICardSummary, ICardSummaryResponse } from "@typings/interfaces";
import { useIsFocused } from "@react-navigation/native";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";
import { responseToState } from "@mappers/getCardListMapper";
import { getCardsRoute } from "@routes";

export const useCardList = (cardFilter: ICardFilter | undefined) => {
    const [cardList, setCardList] = useState<ICardSummary[]>();
    const [getCardListState, { get }] = useFetch();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const isScreenFocused = useIsFocused();

    const getCardList = useCallback(() => {
        const query = cardFilter ? `?${objectToQuery({ name: cardFilter.search })}` : "";

        return get<ICardSummaryResponse[]>(getCardsRoute(query)).then((response) => {
            if (response) {
                setCardList(responseToState(response));
            }
        });
    }, [cardFilter, get]);

    useEffect(() => {
        if (isScreenFocused) {
            getCardList();
        }
    }, [isScreenFocused, getCardList]);

    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        getCardList().then(() => setIsRefreshing(false));
    }, [getCardList]);

    return {
        cardList,
        getCardListState,
        onRefresh,
        isRefreshing,
    };
};
