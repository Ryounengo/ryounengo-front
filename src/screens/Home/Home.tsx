import { ScrollView, VStack } from "native-base";
import { defaultPagination } from "@utils/pagination";
import { DiscoverSection } from "@screens/Home/DiscoverSection/DiscoverSection";
import { IDeckFilter } from "@typings/interfaces";
import { ErrorAndLoading } from "@common/ErrorAndLoading/ErrorAndLoading";
import { useDeckList } from "@hooks/Deck/useDeckList";
import { ReviewSection } from "@screens/Home/ReviewSection/ReviewSection";

export const Home = () => {
    const publicDecksQuery: IDeckFilter = {
        ...defaultPagination,
        limit: 6,
        isReviewed: false,
    };
    const DecksToReviewQuery: IDeckFilter = {
        ...defaultPagination,
        limit: 6,
        isReviewed: true,
        isToReview: true,
    };
    const {
        deckList: discoverCardList,
        error: deckDiscoverListError,
        isValidating: isDiscoverValidating,
    } = useDeckList(publicDecksQuery);
    const {
        deckList: reviewCardList,
        error: deckReviewListError,
        isValidating: isReviewValidating,
    } = useDeckList(DecksToReviewQuery);

    return (
        <ScrollView>
            <VStack>
                <ErrorAndLoading error={deckDiscoverListError} isLoading={!discoverCardList && isDiscoverValidating}>
                    {discoverCardList && <DiscoverSection deckList={discoverCardList.content} />}
                </ErrorAndLoading>
                <ErrorAndLoading error={deckReviewListError} isLoading={!reviewCardList && isReviewValidating}>
                    {reviewCardList && <ReviewSection deckList={reviewCardList.content} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
