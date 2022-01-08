import { ECardType } from "@typings/enums";

export interface ICardEditRectoForm {
    mainText: string;
    secondaryText: string;
    optionalText: string;
    exampleText: string;
}

export interface ICardEditVersoForm {
    mainText: string;
    optionalText: string;
}

export interface ICardTypeForm {
    isReversed: boolean;
    cardType: ECardType;
}

export interface ICardEditForm {
    type: ICardTypeForm;
    front: ICardEditRectoForm;
    back: ICardEditVersoForm;
}
