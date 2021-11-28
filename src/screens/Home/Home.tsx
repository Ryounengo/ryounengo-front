import { ScrollView, VStack } from "native-base";
import { defaultPagination } from "@utils/pagination";
import { DiscoverSection } from "@screens/Home/DiscoverSection/DiscoverSection";
import { IDeckFilter } from "@typings/interfaces";
import { ReviewSection } from "@screens/Home/ReviewSection/ReviewSection";
import { useDeckList } from "@common/Deck";
import { ErrorAndLoading } from "@common/ErrorAndLoading/ErrorAndLoading";
import { useCardReviewList } from "@hooks/Review";

export const Home = () => {
    const publicDecksQuery: IDeckFilter = {
        ...defaultPagination,
        limit: 6,
        isPrivate: false,
    };
    const { reviewCardList, error: reviewCardListError } = useCardReviewList();
    const { deckList, error: deckListError } = useDeckList(publicDecksQuery);

    return (
        <ScrollView>
            <VStack>
                {/* TODO search Bar Deck + Card (need server route)*/}
                <ErrorAndLoading error={deckListError} isLoading={!deckList}>
                    {deckList && <DiscoverSection deckList={deckList} />}
                </ErrorAndLoading>
                <ErrorAndLoading error={reviewCardListError} isLoading={!reviewCardList}>
                    {reviewCardList && <ReviewSection cardReviewList={reviewCardList} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
