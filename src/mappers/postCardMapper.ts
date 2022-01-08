import { ICardEditResponse } from "@typings/interfaces";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";

export const stateToRequest = (formData: ICardEditForm): ICardEditResponse => {
    const { front, type, back } = formData;

    return {
        back: [back.mainText, back.optionalText].filter((text) => text),
        front: [front.mainText, front.secondaryText, front.optionalText].filter((text) => text),
        example: front.exampleText,
        type: type.cardType,
        reverseCard: type.isReversed,
    };
};
