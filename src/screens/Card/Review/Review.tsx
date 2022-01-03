import { Fragment } from "react";
import { Button, View } from "native-base";
import { ReviewCard } from "@screens/Card/Review/ReviewCard";
import { useReviewCard } from "@screens/Card/Review/useReviewCard";
import { ECardReviewName } from "@screens/Card/Review/IReviewPayload";
import { ErrorAndLoading } from "@common/ErrorAndLoading";
import { useCardReviewList } from "@hooks/Review/useCardReviewList";

export const Review = () => {
    const { reviewCardList, error } = useCardReviewList();
    const { reviewCard, currentCard } = useReviewCard({ reviewCardList: reviewCardList?.content });

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
