import { ScrollView, VStack } from "native-base";
import { ErrorAndLoading, useDeckList, useCardReviewList } from "@common";
import { defaultPagination } from "@utils/pagination";
import { DiscoverSection } from "@screens/Home/DiscoverSection/DiscoverSection";
import { IDeckFilter } from "@typings/interfaces";
import { ReviewSection } from "@screens/Home/ReviewSection/ReviewSection";

export const Home = () => {
    const publicDecksQuery: IDeckFilter = {
        ...defaultPagination,
        limit: 5,
        isPrivate: false,
    };
    const { reviewCardList, error: reviewCardListError } = useCardReviewList();
    const { deckList, error: deckListError } = useDeckList(publicDecksQuery);

    return (
        <ScrollView>
            <VStack>
                <ErrorAndLoading error={reviewCardListError} isLoading={!reviewCardList}>
                    {reviewCardList && <ReviewSection cardReviewList={reviewCardList} />}
                </ErrorAndLoading>
                <ErrorAndLoading error={deckListError} isLoading={!deckList}>
                    {deckList && <DiscoverSection deckList={deckList} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
