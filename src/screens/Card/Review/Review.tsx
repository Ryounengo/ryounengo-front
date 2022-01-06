import { Fragment } from "react";
import { Button, View } from "native-base";
import { ReviewCard } from "@screens/Card/Review/ReviewCard";
import { useReviewCard } from "@screens/Card/Review/useReviewCard";
import { ECardReviewName } from "@screens/Card/Review/IReviewPayload";
import { ErrorAndLoading } from "@common/ErrorAndLoading";
import { useCardReviewList } from "@hooks/Review/useCardReviewList";
import { StackScreenProps } from "@react-navigation/stack";
import { TRootNavigation } from "@navigation/INavigation";
import { useStyle } from "@screens/Card/Review/styles";

type TParams = StackScreenProps<TRootNavigation, "reviewCards">;

export const Review = (props: TParams) => {
    const { route } = props;
    const style = useStyle();
    const { reviewCardList, error } = useCardReviewList(route.params.deckId);
    const { reviewCard, currentCard, isCurrenCardReversed } = useReviewCard({
        reviewCardList: reviewCardList?.content,
    });

    const qualityLevels = Object.values(ECardReviewName);

    return (
        <View>
            <ErrorAndLoading error={error} isLoading={!reviewCardList && !error}>
                {currentCard && (
                    <Fragment>
                        <ReviewCard card={currentCard} isCurrenCardReversed={isCurrenCardReversed} />
                        <View style={style.button}>
                            {qualityLevels.map((level) => (
                                <Button key={level} onPress={() => reviewCard(currentCard?.id, level)}>
                                    {`review ${level}`}
                                </Button>
                            ))}
                        </View>
                    </Fragment>
                )}
            </ErrorAndLoading>
        </View>
    );
};
