import { IDeckEditForm } from "@typings/interfaces";
import { ECardType } from "@typings/enums";

interface ICreateDeckRequest {
    name: string;
    description: string;
    tags: string[];
    isPrivate: boolean;
    defaultCardType: ECardType;
    defaultReviewReverseCard: boolean;
}

export const stateToRequest = (deckForm: IDeckEditForm): ICreateDeckRequest => ({
    description: deckForm.description,
    name: deckForm.name,
    tags: deckForm.tags.split(","),
    isPrivate: deckForm.isPrivate,
    defaultCardType: deckForm.defaultCardType,
    defaultReviewReverseCard: deckForm.defaultReviewReverseCard,
});
