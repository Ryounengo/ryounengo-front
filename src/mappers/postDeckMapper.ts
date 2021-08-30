import { EDeckType, ICreateDeckForm } from "../screens/Deck/CreateDeck/ICreateDeck";

interface ICreateDeckRequest {
    modelType: EDeckType;
    name: string;
    description: string;
    tags: string[];
    isPrivate: boolean;
}

export const stateToRequest = (deckForm: ICreateDeckForm, deckType: EDeckType): ICreateDeckRequest => ({
    description: deckForm.description,
    name: deckForm.name,
    tags: deckForm.tags.split(","),
    isPrivate: deckForm.isPrivate,
    modelType: deckType,
});
