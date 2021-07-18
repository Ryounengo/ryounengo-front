import { Box, Button, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

export const SearchDeck = () => {
    const navigation = useNavigation();
    const { t } = useTranslation("deck");

    return (
        <Box>
            <Text>search a deck</Text>
            <Button onPress={() => navigation.navigate("createDeck")}>{t("createDeck")}</Button>
        </Box>
    );
};
