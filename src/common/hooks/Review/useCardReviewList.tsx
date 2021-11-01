import { useEffect, useState } from "react";
import { ICard, ICardResponse } from "@typings/interfaces";
import { getCardsRoute } from "@routes";
import { objectToQuery } from "@utils/fetchUtils";
import { responseToState } from "@mappers/getCardMapper";
import { useGetApi } from "../api/useGetApi";

export const useCardReviewList = () => {
    const [reviewCardList, setReviewCardList] = useState<ICard[]>();
    const query = `?${objectToQuery({
        toReview: true,
    })}`;

    const { data: reviewCardResponse, error } = useGetApi<ICardResponse[]>(getCardsRoute(query));

    useEffect(() => {
        if (reviewCardResponse) {
            setReviewCardList(responseToState(reviewCardResponse));
        }
    }, [reviewCardResponse]);

    return {
        reviewCardList,
        error,
    };
};
