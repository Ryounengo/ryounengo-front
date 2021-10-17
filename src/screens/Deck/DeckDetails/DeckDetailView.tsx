import { Button, Heading, ScrollView, Text, VStack } from "native-base";
import { CardSummary } from "../../Card/CardList/CardList/CardSummary";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { IDeck } from "@typings/interfaces";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "deckDetails">;

interface IParams {
    deck: IDeck;
}

export const DeckDetailsView = (props: IParams) => {
    const { deck } = props;
    const { navigate } = useNavigation<NavigationProps>();
    const { t } = useTranslation(["deck", "card"]);
    const { cards, isPrivate, tags, description, name, id } = deck;

    return (
        <ScrollView>
            <Text>Name: {name}</Text>
            <Text>description: {description}</Text>
            <Text>Private: {isPrivate ? "yes" : "no"}</Text>
            <Text>Tags: {tags.join(", ")}</Text>
            <Text>Nb of cards: {cards.length}</Text>
            <Heading>Cards</Heading>
            <VStack space={2}>
                {deck?.cards.map((card) => (
                    <CardSummary card={card} key={card.id} />
                ))}
            </VStack>
            <Button onPress={() => navigate("createCard", { deckId: id })}>{t("card:createCard")}</Button>
        </ScrollView>
    );
};
