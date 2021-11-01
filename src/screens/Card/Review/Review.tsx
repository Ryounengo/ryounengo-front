import { Fragment } from "react";
import { Button, View } from "native-base";
import { ErrorAndLoading, useCardReviewList } from "@common";
import { ReviewCard } from "@screens/Card/Review/ReviewCard";
import { useReviewCard } from "@screens/Card/Review/useReviewCard";
import { ECardReviewName } from "@screens/Card/Review/IReviewPayload";

export const Review = () => {
    const { reviewCardList, error } = useCardReviewList();
    const { reviewCard, currentCard } = useReviewCard({ reviewCardList });

    return (
        <View>
            <ErrorAndLoading error={error} isLoading={!reviewCardList}>
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
