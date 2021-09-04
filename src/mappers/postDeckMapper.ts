import { IDeckEditForm } from "@typings/interfaces";

interface ICreateDeckRequest {
    name: string;
    description: string;
    tags: string[];
    isPrivate: boolean;
}

export const stateToRequest = (deckForm: IDeckEditForm): ICreateDeckRequest => ({
    description: deckForm.description,
    name: deckForm.name,
    tags: deckForm.tags.split(","),
    isPrivate: deckForm.isPrivate,
});
