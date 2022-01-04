import { useState } from "react";
import { ECardType } from "@typings/enums/ECard";
import { ICardSummary, ICardEdit } from "@typings/interfaces";
import { ECreateCard } from "@screens/Card/CreateCard/ICreateCard";
import { ICardEditRectoForm, ICardEditVersoForm } from "./ICardEdit";

export const useEditCard = (submit: (card: ICardEdit) => void, card?: ICardSummary) => {
    const [cardType, setCardType] = useState<ECardType>(ECardType.TEXT);
    const [step, setStep] = useState<ECreateCard>(ECreateCard.SELECT_TYPE);
    const [newCard, setNewCard] = useState<ICardEdit>({
        front: card?.front ?? [],
        back: card?.back ?? [],
        example: card?.example ?? "",
        reverseCard: false, //TODO check default deck + card later
        type: card?.type ?? cardType,
    });

    const goToNextStep = () => setStep((previousStep) => previousStep + 1);

    const submitRecto = (formData: ICardEditRectoForm) => {
        const { mainText, exampleText, optionalText, secondaryText } = formData;
        const newRecto = [mainText, secondaryText, optionalText];
        setNewCard((prevState) => prevState && { ...prevState, front: newRecto, example: exampleText });
        goToNextStep();
    };

    const submitVerso = (formData: ICardEditVersoForm) => {
        const { mainText, optionalText } = formData;
        const newVerso = [mainText, optionalText];
        submit({ ...newCard, back: newVerso });
    };

    const submitType = (selectedCardType: ECardType, reverseCard: boolean) => {
        setNewCard((prevState) => prevState && { ...prevState, reverseCard, type: selectedCardType });
        goToNextStep();
    };

    return {
        card,
        step,
        cardType,
        setCardType,
        submitVerso,
        submitRecto,
        submitType,
    };
};
