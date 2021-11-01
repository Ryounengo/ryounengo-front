import { IError, useCustomToast, useFetch } from "@common";
import { ECardReviewName, IReviewPayload } from "@screens/Card/Review/IReviewPayload";
import { getCardsReviewRoute } from "@routes";
import { ICard } from "@typings/interfaces";
import { useEffect, useState } from "react";

interface IParams {
    reviewCardList?: ICard[];
}

export const useReviewCard = (props: IParams) => {
    const { reviewCardList } = props;
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState<ICard>();
    const [postReviewCardState, { post }] = useFetch();
    const { toastError } = useCustomToast();

    useEffect(() => {
        if (reviewCardList) {
            setCurrentCard(reviewCardList[currentCardIndex]);
        }
    }, [currentCardIndex, reviewCardList]);

    const reviewCard = (cardId: string, quality: ECardReviewName) => {
        const payload: IReviewPayload = {
            reviewLevel: quality,
        };

        post(getCardsReviewRoute(cardId), { body: payload, forwardError: true })
            .then(() => {
                if (reviewCardList) {
                    setCurrentCardIndex((prevState) => {
                        if (currentCardIndex < reviewCardList.length) {
                            return prevState + 1;
                        }

                        return reviewCardList.length;
                    });
                }
            })
            .catch((error: IError) => toastError(error.message));
    };

    return {
        reviewCard,
        currentCard,
        postReviewCardState,
    };
};
