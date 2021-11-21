import { Fab, ScrollView } from "native-base";
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import { DeckFilter } from "./DeckList/DeckFilter/DeckFilter";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TDeckNavigation, TRootNavigation } from "@navigation/INavigation";
import { MainScreenLayout } from "@common/Layout";
import { ErrorAndLoading } from "@common/ErrorAndLoading/ErrorAndLoading";
import { DeckList, useDeckList } from "@common/Deck";
import { useTranslation } from "react-i18next";

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TDeckNavigation, "decks">,
    NativeStackNavigationProp<TRootNavigation>
>;

type StackProps = RouteProp<TDeckNavigation, "decks">;

export const Decks = () => {
    const { push, navigate } = useNavigation<NavigationProps>();
    const { params } = useRoute<StackProps>();
    const { t } = useTranslation("deck");

    const goToCreateDeck = () => push("createDeck");

    const goToDeckDetails = (deckId: string) => navigate("deckDetails", { deckId: deckId });

    const { deckList, refresh, isValidating, error, setDeckFilter, isRefreshLoading } = useDeckList(params?.deckQuery);

    return (
        <>
            <ScrollView refreshControl={<RefreshControl refreshing={isRefreshLoading} onRefresh={refresh} />}>
                <MainScreenLayout space={4}>
                    <DeckFilter defaultValues={params?.deckQuery} isLoading={isValidating} setFilter={setDeckFilter} />
                    <ErrorAndLoading error={error} isLoading={!deckList}>
                        {deckList && <DeckList deckList={deckList} goToDetails={goToDeckDetails} />}
                    </ErrorAndLoading>
                </MainScreenLayout>
            </ScrollView>
            <Fab colorScheme="indigo" label={t("createDeck")} onPress={goToCreateDeck} />
        </>
    );
};
