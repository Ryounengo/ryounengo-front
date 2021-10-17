import { useFetch } from "@common";
import { useCallback, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { ICard, ICardResponse } from "@typings/interfaces";
import { getCardsRoute } from "@routes";
import { objectToQuery } from "@utils/fetchUtils";
import { responseToState } from "@mappers/getCardMapper";

export const useCardReviewList = () => {
    const [reviewCardList, setReviewCardList] = useState<ICard[]>();
    const [getReviewCardListState, { get }] = useFetch();
    const isFocused = useIsFocused();

    const getReviewCards = useCallback(() => {
        const query = `?${objectToQuery({
            toReview: true,
        })}`;

        get<ICardResponse[]>(getCardsRoute(query)).then((response) => {
            if (response) {
                setReviewCardList(responseToState(response));
            }
        });
    }, [get]);

    useEffect(() => {
        if (isFocused) {
            getReviewCards();
        }
    }, [getReviewCards, isFocused]);

    return {
        reviewCardList,
        getReviewCardListState,
    };
};
