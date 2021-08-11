import { Button, ScrollView, VStack } from "native-base";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import { ErrorAndLoading } from "../../common";
import { DeckList } from "./DeckList/DeckList";
import { useDeckList } from "./DeckList/useDeckList";

export const Decks = () => {
    const { navigate } = useNavigation();
    const { t } = useTranslation("deck");
    const { deckList, getDeckListState, onRefresh, isRefreshing } = useDeckList();

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
            <VStack space={4}>
                <ErrorAndLoading error={getDeckListState.error} isLoading={getDeckListState.isLoading}>
                    {deckList && <DeckList deckList={deckList} />}
                </ErrorAndLoading>
                <Button onPress={() => navigate("deckType")}>{t("createDeck")}</Button>
            </VStack>
        </ScrollView>
    );
};
