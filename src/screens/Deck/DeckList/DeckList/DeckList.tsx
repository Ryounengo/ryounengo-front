import { Pressable, Text, VStack } from "native-base";
import { DeckSummary } from "./DeckSummary";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { TStackNavigation } from "../../../../navigation/INavigation";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { IDeckSummary } from "../../../../types/interfaces";

type NavigationProps = NativeStackNavigationProp<TStackNavigation, "decks">;

interface IParams {
    deckList: IDeckSummary[];
}

export const DeckList = (props: IParams) => {
    const { t } = useTranslation("common");
    const { navigate } = useNavigation<NavigationProps>();
    const { deckList } = props;

    return (
        <VStack space={4}>
            {deckList?.map((deck) => (
                <Pressable key={deck.id} onPress={() => navigate("deckDetails", { deckId: deck.id })}>
                    <DeckSummary deck={deck} />
                </Pressable>
            ))}
            {deckList?.length === 0 && <Text>{t("noResults")}</Text>}
        </VStack>
    );
};
