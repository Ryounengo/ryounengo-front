import { Box, Heading, VStack } from "native-base";
import { ReactNode } from "react";
import { useRoute } from "@react-navigation/native";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import { useStyle } from "./style";
import { useTranslation } from "react-i18next";

interface IParams extends IVStackProps {
    children: ReactNode;
}

export const MainScreenLayout = (props: IParams) => {
    const { children, ...rest } = props;
    const { name } = useRoute();
    const style = useStyle();
    const { t } = useTranslation("navigation");

    return (
        <VStack {...rest}>
            <Heading style={style.title}>{t(name)}</Heading>
            <Box>{children}</Box>
        </VStack>
    );
};
