import { ScrollView, VStack } from "native-base";
import { RefreshControl } from "react-native";
import { useState } from "react";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";
import { useCardList } from "@screens/Card/CardList/CardList/useCardList";
import { CardFilter } from "@screens/Card/CardList/CardFilter/CardFilter";
import { CardList } from "@screens/Card/CardList/CardList/CardList";
import { ErrorAndLoading } from "@common/ErrorAndLoading";

export const Cards = () => {
    const [cardFilter, setCardFilter] = useState<ICardFilter>();
    const { cardList, error, refresh, isRefreshLoading } = useCardList(cardFilter);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshLoading} onRefresh={refresh} />}>
            <VStack space={4}>
                <CardFilter setFilter={setCardFilter} />
                <ErrorAndLoading error={error} isLoading={!cardList}>
                    {cardList && <CardList cardList={cardList} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
