import { Box, Center, HStack, Text } from "native-base";
import { useStyle } from "./styles";
import { EDeckType } from "./ICreateDeck";

interface IParams {
    setDeckType(deckType: EDeckType): void;
}

export const DeckType = (props: IParams) => {
    const { setDeckType } = props;
    const styles = useStyle();

    return (
        <Center size="100%">
            <HStack alignItems="center" style={styles.cardWrapper}>
                <Box rounded="lg" shadow={2} style={styles.card} onTouchEnd={() => setDeckType(EDeckType.BASIC)}>
                    <Text m="auto">Basic</Text>
                </Box>
                <Box rounded="lg" shadow={2} style={styles.card} onTouchEnd={() => setDeckType(EDeckType.HIRAGANA)}>
                    <Text m="auto">Hiragana</Text>
                </Box>
                <Box rounded="lg" shadow={2} style={styles.card} onTouchEnd={() => setDeckType(EDeckType.FREE)}>
                    <Text m="auto">Free</Text>
                </Box>
            </HStack>
        </Center>
    );
};
