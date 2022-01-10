import { CardTypeCard } from "@common/Card/CardTypeCard/CardTypeCard";
import AddTextCardIcon from "@static/icons/addTextCard.svg";
import { useTranslation } from "react-i18next";
import { useStyle } from "./style";

export const TextTypeCard = () => {
    const style = useStyle();
    const { t } = useTranslation();

    return (
        <CardTypeCard
            backgroundColor={style.textCard.backgroundColor}
            description={t("deck:textCard.description")}
            icon={AddTextCardIcon}
            name={t("deck:textCard.name")}
        />
    );
};
