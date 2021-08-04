import { Box, Center, HStack, Text } from "native-base";
import { useStyle } from "./styles";
import { EDeckType, TCreateDeckStackParams } from "./ICreateDeck";
import { useTranslation } from "react-i18next";
import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";

type TParams = StackScreenProps<TCreateDeckStackParams, "deckType">;

export const DeckType = (props: TParams) => {
    const { navigation } = props;
    const [deckType, setDeckType] = useState<EDeckType>(EDeckType.BASIC);
    const { t } = useTranslation("deck");
    const styles = useStyle();

    const handleTouch = (selectedDeckType: EDeckType) => {
        setDeckType(selectedDeckType);
        navigation.navigate("deckEdit", { deckType: selectedDeckType });
    };

    const renderDeckType = Object.values(EDeckType).map((value) => (
        <Box
            border={deckType === value ? styles.selectedCard : {}}
            key={value}
            rounded="lg"
            shadow={2}
            style={styles.card}
            onTouchStart={() => handleTouch(value)}
        >
            <Text m="auto">{t(value.toLocaleLowerCase())}</Text>
        </Box>
    ));

    return (
        <Center size="100%">
            <Text>Current Type: {deckType}</Text>
            <HStack alignItems="center" style={styles.cardWrapper}>
                {renderDeckType}
            </HStack>
        </Center>
    );
};
