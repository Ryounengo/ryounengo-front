import { Box, Heading, AddIcon, IconButton, Text, MoonIcon } from "native-base";
import { IDeckSummary } from "@typings/interfaces";
import { useStyle } from "./styles";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TDeckNavigation, TRootNavigation } from "@navigation/INavigation";

interface IParams {
    deck: IDeckSummary;
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TDeckNavigation, "decks">,
    NativeStackNavigationProp<TRootNavigation>
>;

export const DeckSummary = (props: IParams) => {
    const { deck } = props;
    const style = useStyle();
    const { navigate } = useNavigation<NavigationProps>();
    const { cards, description, isPrivate, name } = deck;
    const goToCreateCard = () => navigate("createCard", { deckId: deck.id });

    return (
        <Box style={style.deck}>
            <Box maxW="80%">
                <Text>{cards.length}</Text>
                <Heading>{name}</Heading>
                <Text>{description}</Text>
            </Box>
            <Box marginLeft="auto">
                {isPrivate && (
                    <IconButton
                        icon={<AddIcon />}
                        marginBottom={2}
                        size="md"
                        style={style.actionButton}
                        onPress={goToCreateCard}
                    />
                )}
                <IconButton icon={<MoonIcon />} size="md" style={style.actionButton} />
            </Box>
        </Box>
    );
};
