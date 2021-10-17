import { ScrollView, VStack } from "native-base";
import { RefreshControl } from "react-native";
import { ErrorAndLoading } from "@common";
import { useState } from "react";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";
import { useCardList } from "@screens/Card/CardList/CardList/useCardList";
import { CardFilter } from "@screens/Card/CardList/CardFilter/CardFilter";
import { CardList } from "@screens/Card/CardList/CardList/CardList";

export const Cards = () => {
    const [cardFilter, setCardFilter] = useState<ICardFilter>();
    const { cardList, getCardListState, onRefresh, isRefreshing } = useCardList(cardFilter);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
            <VStack space={4}>
                <CardFilter isLoading={getCardListState.isLoading} setFilter={setCardFilter} />
                <ErrorAndLoading error={getCardListState.error} isLoading={getCardListState.isLoading}>
                    {cardList && <CardList cardList={cardList} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};