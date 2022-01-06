import { ICard, ICardResponse, IError } from "@typings/interfaces";
import { getCardsRoute } from "@routes";
import { fetcher, objectToQuery } from "@utils/fetchUtils";
import { responseToState } from "@mappers/getCardMapper";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";
import { useEffect, useState } from "react";

export const useCardReviewList = (deckId?: string) => {
    const [reviewCardList, setReviewCardList] = useState<IPaginatedResponse<ICard[]>>();
    const [error, setError] = useState<IError>();
    const query = `?${objectToQuery({
        toReview: true,
        deckId,
    })}`;

    useEffect(() => {
        fetcher<IPaginatedResponse<ICardResponse[]>>(getCardsRoute(query))
            .then((response) => {
                if (response) {
                    setReviewCardList(responseToState(response));
                }
            })
            .catch((err: IError) => setError(err));
    }, [query]);

    return {
        reviewCardList,
        error,
    };
};
