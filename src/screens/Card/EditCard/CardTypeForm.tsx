import { Box, Checkbox, Pressable, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useStyle } from "./style";

interface IParams {
    submitType(): void;
}

export const CardTypeForm = (props: IParams) => {
    const { submitType } = props;
    const [isReversed, setIsReversed] = useState(true);
    const { t } = useTranslation("card");
    const styles = useStyle();

    return (
        <Box>
            <Checkbox isChecked={isReversed} value="" onChange={setIsReversed}>
                <Text>{t("makeCardReversed")}</Text>
            </Checkbox>
            <Pressable onPress={submitType}>
                <Text style={styles.selectedCard} textAlign="center">
                    {t("textCard")}
                </Text>
            </Pressable>
        </Box>
    );
};
