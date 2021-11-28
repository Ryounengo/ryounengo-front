import { useStyle } from "./style";
import { Box, Heading, VStack } from "native-base";
import TumbleweedIcon from "@static/images/tumbleweed.svg";
import { useTranslation } from "react-i18next";

export const NoResult = () => {
    const style = useStyle();
    const { t } = useTranslation("common");

    return (
        <VStack m={2}>
            <Box alignItems="center" justifyContent="center">
                <TumbleweedIcon height={130} style={style.icon} width="40%" />
            </Box>
            <Heading style={style.noResultText}>{t("noResults")}</Heading>
        </VStack>
    );
};
