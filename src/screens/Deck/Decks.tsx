import { Button, ScrollView, VStack } from "native-base";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import { ErrorAndLoading } from "../../common";
import { DeckList } from "./DeckList/DeckList/DeckList";
import { useDeckList } from "./DeckList/DeckList/useDeckList";
import { DeckFilter } from "./DeckList/DeckFilter/DeckFilter";
import { useState } from "react";
import { IDeckFilter } from "./IDeck";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TStackNavigation } from "../../navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TStackNavigation, "decks">;

export const Decks = () => {
    const { push } = useNavigation<NavigationProps>();
    const { t } = useTranslation("deck");
    const [deckFilter, setDeckFilter] = useState<IDeckFilter>();
    const { deckList, getDeckListState, onRefresh, isRefreshing } = useDeckList(deckFilter);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
            <VStack space={4}>
                <DeckFilter isLoading={getDeckListState.isLoading} setFilter={setDeckFilter} />
                <ErrorAndLoading error={getDeckListState.error} isLoading={getDeckListState.isLoading}>
                    {deckList && <DeckList deckList={deckList} />}
                </ErrorAndLoading>
                <Button onPress={() => push("deckType")}>{t("createDeck")}</Button>
            </VStack>
        </ScrollView>
    );
};
