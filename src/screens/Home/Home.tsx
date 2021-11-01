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
    const { deckList, getDeckListState } = useDeckList(publicDecksQuery);
    const { getReviewCardListState, reviewCardList } = useCardReviewList();

    return (
        <ScrollView>
            <VStack>
                <ErrorAndLoading error={getReviewCardListState.error} isLoading={getReviewCardListState.isLoading}>
                    {reviewCardList && <ReviewSection cardReviewList={reviewCardList} />}
                </ErrorAndLoading>
                <ErrorAndLoading error={getDeckListState.error} isLoading={getDeckListState.isLoading}>
                    {deckList && <DiscoverSection deckList={deckList} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
