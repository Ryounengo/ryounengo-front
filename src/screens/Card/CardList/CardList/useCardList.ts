import { useEffect, useState } from "react";
import { objectToQuery } from "@utils/fetchUtils";
import { ICardSummary, ICardSummaryResponse } from "@typings/interfaces";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";
import { responseToState } from "@mappers/getCardListMapper";
import { getCardsRoute } from "@routes";
import { useGetApi } from "../../../../common/hooks/api/useGetApi";

export const useCardList = (cardFilter: ICardFilter | undefined) => {
    const [cardList, setCardList] = useState<ICardSummary[]>();
    const query = cardFilter ? `?${objectToQuery({ name: cardFilter.search })}` : "";

    const {
        data: cardResponse,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
    } = useGetApi<ICardSummaryResponse[]>(getCardsRoute(query));

    useEffect(() => {
        if (cardResponse) {
            setCardList(responseToState(cardResponse));
        }
    }, [cardResponse]);

    return {
        cardList,
        isValidating,
        error,
        refresh,
        isRefreshLoading,
    };
};
