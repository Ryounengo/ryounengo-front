import { Heading, ScrollView } from "native-base";
import { RefreshControl } from "react-native";
import { useState } from "react";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";
import { useCardList } from "@screens/Card/CardList/CardList/useCardList";
import { CardFilter } from "@screens/Card/CardList/CardFilter/CardFilter";
import { CardList } from "@screens/Card/CardList/CardList/CardList";
import { ErrorAndLoading } from "@common/ErrorAndLoading";
import { useTranslation } from "react-i18next";
import { MainScreenLayout } from "@common/Layout";

export const Cards = () => {
    const [cardFilter, setCardFilter] = useState<ICardFilter>();
    const { t } = useTranslation();
    const { cardList, error, refresh, isRefreshLoading } = useCardList(cardFilter);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshLoading} onRefresh={refresh} />}>
            <MainScreenLayout>
                <CardFilter setFilter={setCardFilter} />
                <Heading marginLeft={4}>{t("totalResult", { count: cardList?.totalElements ?? 0 })}</Heading>
                <ErrorAndLoading error={error} isLoading={!cardList}>
                    {cardList && <CardList cardList={cardList.content} refresh={refresh} />}
                </ErrorAndLoading>
            </MainScreenLayout>
        </ScrollView>
    );
};
