import { Box, Center, HStack, Pressable, Text } from "native-base";
import { useStyle } from "./styles";
import { useTranslation } from "react-i18next";
import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import { TStackNavigation } from "@navigation/INavigation";
import { EDeckType } from "@typings/enums";

type TParams = StackScreenProps<TStackNavigation, "deckType">;

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
        <Pressable key={value} onPress={() => handleTouch(value)}>
            <Box border={deckType === value ? styles.selectedCard : {}} rounded="lg" shadow={2} style={styles.card}>
                <Text m="auto">{t(value.toLocaleLowerCase())}</Text>
            </Box>
        </Pressable>
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
