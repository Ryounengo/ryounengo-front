import { Text, VStack } from "native-base";
import { useTranslation } from "react-i18next";
import { ICardSummary } from "@typings/interfaces";
import { CardSummary } from "@screens/Card/CardList/CardList/CardSummary";
import { useStyle } from "@screens/Card/CardList/CardList/styles";

interface IParams {
    cardList: ICardSummary[];
}

export const CardList = (props: IParams) => {
    const { t } = useTranslation("common");
    const { cardList } = props;
    const style = useStyle();

    return (
        <VStack space={4} style={style.cardList}>
            {cardList?.map((card) => (
                <CardSummary card={card} key={card.id} />
            ))}
            {cardList?.length === 0 && <Text>{t("common:noResults")}</Text>}
        </VStack>
    );
};
