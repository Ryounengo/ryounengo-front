import { Fab, Heading, ScrollView } from "native-base";
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import { DeckFilter } from "./DeckList/DeckFilter/DeckFilter";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TDeckNavigation, TRootNavigation } from "@navigation/INavigation";
import { MainScreenLayout } from "@common/Layout";
import { ErrorAndLoading } from "@common/ErrorAndLoading/ErrorAndLoading";
import { useTranslation } from "react-i18next";
import { useDeckList } from "@hooks/Deck/useDeckList";
import { DeckList } from "./DeckList/DeckList";

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TDeckNavigation, "decks">,
    NativeStackNavigationProp<TRootNavigation>
>;

type StackProps = RouteProp<TDeckNavigation, "decks">;

export const Decks = () => {
    const { push, navigate } = useNavigation<NavigationProps>();
    const { params } = useRoute<StackProps>();
    const { t } = useTranslation("deck");

    const goToCreateDeck = () => push("editDeck", { deck: undefined });

    const goToDeckDetails = (deckId: string) => navigate("deckDetails", { deckId: deckId });

    const { deckList, refresh, isValidating, error, setDeckFilter, isRefreshLoading } = useDeckList(params?.deckQuery);

    return (
        <>
            <ScrollView refreshControl={<RefreshControl refreshing={isRefreshLoading} onRefresh={refresh} />}>
                <MainScreenLayout space={4}>
                    <Heading marginLeft={4}>{t("totalResult", { count: deckList?.totalElements ?? 0 })}</Heading>
                    <DeckFilter defaultValues={params?.deckQuery} setFilter={setDeckFilter} />
                    <ErrorAndLoading error={error} isLoading={isValidating && !deckList}>
                        {deckList && <DeckList deckList={deckList.content} goToDetails={goToDeckDetails} />}
                    </ErrorAndLoading>
                </MainScreenLayout>
            </ScrollView>
            <Fab label={t("createDeck")} padding={2} w="30%" onPress={goToCreateDeck} />
        </>
    );
};
