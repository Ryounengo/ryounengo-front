import { CardTypeForm } from "./CardTypeForm";
import { Box } from "native-base";
import { ECreateCard } from "@screens/Card/CreateCard/ICreateCard";
import { CardEditRectoForm } from "./CardEditRectoForm";
import { useEditCard } from "./useEditCard";
import { ICard, ICardEdit } from "@typings/interfaces";
import { CardEditVersoForm } from "./CardEditVersoForm";

interface IParams {
    submit(formData: ICardEdit): void;
    card?: ICard;
    isLoading: boolean;
    isEdit?: boolean;
}

export const CardEdit = (props: IParams) => {
    const { submit, card, isEdit, isLoading } = props;
    const { cardType, step, submitType, submitRecto, submitVerso } = useEditCard(submit, card);

    return (
        <Box>
            {step === ECreateCard.SELECT_TYPE && (
                <CardTypeForm cardType={cardType} isEdit={isEdit} submitType={submitType} />
            )}
            {step === ECreateCard.RECTO && <CardEditRectoForm card={card} submitRecto={submitRecto} />}
            {step === ECreateCard.VERSO && (
                <CardEditVersoForm card={card} isLoading={isLoading} submitVerso={submitVerso} />
            )}
        </Box>
    );
};
