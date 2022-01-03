import { ICard, ICardResponse } from "@typings/interfaces";
import { getCardsRoute } from "@routes";
import { objectToQuery } from "@utils/fetchUtils";
import { responseToState } from "@mappers/getCardMapper";
import { useGetApi } from "@hooks/api";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";

export const useCardReviewList = () => {
    const query = `?${objectToQuery({
        toReview: true,
    })}`;

    const { data: reviewCardList, error } = useGetApi<IPaginatedResponse<ICardResponse[]>, IPaginatedResponse<ICard[]>>(
        getCardsRoute(query),
        { mapper: responseToState }
    );

    return {
        reviewCardList,
        error,
    };
};
