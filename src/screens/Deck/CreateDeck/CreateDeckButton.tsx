import { Text, AddIcon, Box, Pressable } from "native-base";
import { useStyle } from "@screens/Deck/CreateDeck/styles";
import { useTranslation } from "react-i18next";

interface IParams {
    onPress(): void;
}

export const CreateDeckButton = (props: IParams) => {
    const { onPress } = props;
    const style = useStyle();
    const { t } = useTranslation("deck");

    return (
        <Pressable style={style.wrapper} onPress={onPress}>
            <Box style={style.deck}>
                <AddIcon />
                <Text fontSize="xl" fontWeight="bold" style={style.text}>
                    {t("createDeck")}
                </Text>
            </Box>
        </Pressable>
    );
};
