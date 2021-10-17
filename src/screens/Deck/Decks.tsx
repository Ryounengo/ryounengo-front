import { ScrollView, VStack } from "native-base";
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import { ErrorAndLoading, DeckList, useDeckList } from "@common";
import { DeckFilter } from "./DeckList/DeckFilter/DeckFilter";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TDeckNavigation, TRootNavigation } from "@navigation/INavigation";
import { CreateDeckButton } from "@screens/Deck/CreateDeck/CreateDeckButton";

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TDeckNavigation, "decks">,
    NativeStackNavigationProp<TRootNavigation>
>;

type StackProps = RouteProp<TDeckNavigation, "decks">;

export const Decks = () => {
    const { push, navigate } = useNavigation<NavigationProps>();
    const { params } = useRoute<StackProps>();

    const goToCreateDeck = () => push("createDeck");
    const goToDeckDetails = (deckId: string) => navigate("deckDetails", { deckId: deckId });

    const { deckList, getDeckListState, onRefresh, isRefreshing, setDeckFilter } = useDeckList(params?.deckQuery);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}>
            <VStack space={4}>
                <DeckFilter
                    defaultValues={params?.deckQuery}
                    isLoading={getDeckListState.isLoading}
                    setFilter={setDeckFilter}
                />
                <CreateDeckButton onPress={goToCreateDeck} />
                <ErrorAndLoading error={getDeckListState.error} isLoading={getDeckListState.isLoading}>
                    {deckList && <DeckList deckList={deckList} goToDetails={goToDeckDetails} />}
                </ErrorAndLoading>
            </VStack>
        </ScrollView>
    );
};
