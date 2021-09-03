import { EDeckType } from "@typings/enums";
import { IDeckEditForm } from "@typings/interfaces";

interface ICreateDeckRequest {
    modelType: EDeckType;
    name: string;
    description: string;
    tags: string[];
    isPrivate: boolean;
}

export const stateToRequest = (deckForm: IDeckEditForm, deckType: EDeckType): ICreateDeckRequest => ({
    description: deckForm.description,
    name: deckForm.name,
    tags: deckForm.tags.split(","),
    isPrivate: deckForm.isPrivate,
    modelType: deckType,
});
