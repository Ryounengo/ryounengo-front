import { ScrollView, VStack } from "native-base";
import { VirtualDeck } from "@screens/Home/ReviewSection/VirtualDeck";
import { ErrorAndLoading, useDeckList } from "@common";
import { defaultPagination } from "@utils/pagination";
import { DiscoverSection } from "@screens/Home/DiscoverSection/DiscoverSection";
import { useVirtualDeck } from "@screens/Home/ReviewSection/useVirtualDeck";
import { IDeckFilter } from "@typings/interfaces";

export const Home = () => {
    const publicDecksQuery: IDeckFilter = {
        ...defaultPagination,
        limit: 5,
        isPrivate: false,
    };
    const { deckList, getDeckListState } = useDeckList(publicDecksQuery);
    const { getVirtualDeckState, virtualDeck } = useVirtualDeck();

    return (
        <ScrollView>
            <VStack>
                <ErrorAndLoading error={getVirtualDeckState.error} isLoading={getVirtualDeckState.isLoading}>
                    {virtualDeck && <VirtualDeck virtualDeck={virtualDeck} />}
                </ErrorAndLoading>
                <ErrorAndLoading error={getDeckListState.error} isLoading={getDeckListState.isLoading}>
                    {deckList && <DiscoverSection deckList={deckList} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
