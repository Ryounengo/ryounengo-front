import { objectToQuery } from "@utils/fetchUtils";
import { ICardSummary, ICardSummaryResponse } from "@typings/interfaces";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";
import { responseToState } from "@mappers/getCardListMapper";
import { getCardsRoute } from "@routes";
import { useGetApi } from "@hooks/api";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";

export const useCardList = (cardFilter: ICardFilter | undefined) => {
    const query = cardFilter ? `?${objectToQuery({ name: cardFilter.search })}` : "";

    const {
        data: cardList,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
    } = useGetApi<IPaginatedResponse<ICardSummaryResponse[]>, IPaginatedResponse<ICardSummary[]>>(
        getCardsRoute(query),
        { mapper: responseToState }
    );

    return {
        cardList,
        isValidating,
        error,
        refresh,
        isRefreshLoading,
    };
};
