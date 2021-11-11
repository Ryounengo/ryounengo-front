import { useCustomToast, usePostApi } from "@common";
import { ECardReviewName, IReviewPayload } from "@screens/Card/Review/IReviewPayload";
import { getCardsReviewRoute } from "@routes";
import { ICard } from "@typings/interfaces";
import { useEffect, useState } from "react";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TBottomTabNavigation, TRootNavigation } from "@navigation/INavigation";

interface IParams {
    reviewCardList?: ICard[];
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TRootNavigation, "reviewCards">,
    NativeStackNavigationProp<TBottomTabNavigation>
>;

export const useReviewCard = (props: IParams) => {
    const { reviewCardList } = props;
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const { navigate } = useNavigation<NavigationProps>();
    const [currentCard, setCurrentCard] = useState<ICard>();
    const { isLoading, update } = usePostApi();
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

        update(getCardsReviewRoute(cardId), payload)
            .then(() => {
                if (reviewCardList) {
                    if (currentCardIndex === reviewCardList.length - 1) {
                        navigate("home");

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
    };
};
