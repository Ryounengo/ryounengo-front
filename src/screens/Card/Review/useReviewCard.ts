import { ECardReviewName, IReviewPayload } from "@screens/Card/Review/IReviewPayload";
import { getCardsReviewRoute } from "@routes";
import { ICard } from "@typings/interfaces";
import { useMemo, useState } from "react";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TBottomTabNavigation, TLoggedNavigation } from "@navigation/INavigation";
import { usePostApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";
import { getReverseCard } from "@utils/cardUtils";

interface IParams {
    reviewCardList?: ICard[];
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TLoggedNavigation, "reviewCards">,
    NativeStackNavigationProp<TBottomTabNavigation>
>;

export const useReviewCard = (props: IParams) => {
    const { reviewCardList } = props;
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const { pop } = useNavigation<NavigationProps>();
    const { isLoading, update } = usePostApi();
    const { toastError } = useCustomToast();

    const shuffledCards: ICard[] =
        useMemo(
            () =>
                reviewCardList?.flatMap((card) => {
                    if (card.reverseToReview) {
                        return [card, getReverseCard(card)];
                    }

                    return card;
                }),
            [reviewCardList]
        )?.sort(() => Math.random() - Math.random()) ?? [];

    const currentCard = shuffledCards[currentCardIndex];
    const isCurrenCardReversed = currentCard && "isReversed" in currentCard;

    const reviewCard = (cardId: string, quality: ECardReviewName, isReverseReview: boolean) => {
        const payload: IReviewPayload = {
            reviewLevel: quality,
            isReverseReview,
        };

        update(getCardsReviewRoute(cardId), payload)
            .then(() => {
                if (shuffledCards) {
                    if (currentCardIndex === shuffledCards.length - 1) {
                        pop();

                        return;
                    }

                    setCurrentCardIndex((prevState) => prevState + 1);
                }
            })
            .catch((error) => toastError(error.message));
    };

    return {
        reviewCard,
        currentCard,
        isLoading,
        isCurrenCardReversed,
    };
};
