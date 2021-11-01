import { Fragment } from "react";
import { Button, View } from "native-base";
import { ErrorAndLoading, useCardReviewList } from "@common";
import { ReviewCard } from "@screens/Card/Review/ReviewCard";
import { useReviewCard } from "@screens/Card/Review/useReviewCard";
import { ECardReviewName } from "@screens/Card/Review/IReviewPayload";

export const Review = () => {
    const { reviewCardList, getReviewCardListState } = useCardReviewList();
    const { reviewCard, currentCard } = useReviewCard({ reviewCardList });
    const { isLoading, error } = getReviewCardListState;

    return (
        <View>
            <ErrorAndLoading error={error} isLoading={isLoading}>
                {currentCard && (
                    <Fragment>
                        <ReviewCard card={currentCard} />
                        <Button onPress={() => reviewCard(currentCard?.id, ECardReviewName.EASY)}>review EASY</Button>
                    </Fragment>
                )}
            </ErrorAndLoading>
        </View>
    );
};
