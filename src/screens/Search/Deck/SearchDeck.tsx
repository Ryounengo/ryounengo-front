import { Button, ScrollView, VStack } from "native-base";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { DeckList } from "../../Deck/DeckList/DeckList";
import { RefreshControl } from "react-native";
import { useDeckList } from "../../Deck/DeckList/useDeckList";
import { ErrorAndLoading } from "../../../common";

export const SearchDeck = () => {
    const { navigate } = useNavigation();
    const { t } = useTranslation("deck");
    const { deckList, getDeckListState, onRefresh, isRefreshing } = useDeckList();

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
            <VStack space={4}>
                <ErrorAndLoading error={getDeckListState.error} isLoading={getDeckListState.isLoading}>
                    {deckList && <DeckList deckList={deckList} />}
                </ErrorAndLoading>
                <Button onPress={() => navigate("createDeck")}>{t("createDeck")}</Button>
            </VStack>
        </ScrollView>
    );
};
