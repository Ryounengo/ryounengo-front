import { IDeck } from "../screens/Deck/IDeck";
import { EDeckType } from "../screens/Deck/CreateDeck/ICreateDeck";

export interface IDeckResponse {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}

export const responseToState = (deckResponse: IDeckResponse[]): IDeck[] =>
    deckResponse.map((deck) => ({
        id: deck.id,
        name: deck.name,
        description: deck.description,
        tags: deck.tags,
        isPrivate: deck.isPrivate,
        cards: deck.cards,
        modelType: deck.modelType,
    }));
