import { Box, Checkbox, Pressable, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { ECardType } from "@typings/enums/ECard";
import { useState } from "react";
import { useStyle } from "./styles";

interface IParams {
    cardType: ECardType;
    submitType(cardType: ECardType, isReverse?: boolean): void;
    isEdit?: boolean;
}

export const CardTypeForm = (props: IParams) => {
    const { cardType, submitType, isEdit } = props;
    const [isReversed, setIsReversed] = useState(true);
    const { t } = useTranslation("card");
    const styles = useStyle();

    return (
        <Box>
            {isEdit && (
                <Checkbox isChecked={isReversed} value="" onChange={setIsReversed}>
                    <Text>{t("makeCardReversed")}</Text>
                </Checkbox>
            )}
            <Pressable onPress={() => submitType(ECardType.TEXT, isReversed)}>
                <Text border={cardType === ECardType.TEXT ? styles.selectedCard : {}} textAlign="center">
                    {t("textCard")}
                </Text>
            </Pressable>
        </Box>
    );
};
