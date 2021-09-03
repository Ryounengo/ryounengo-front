import { IDeck, IDeckResponse } from "../types/interfaces";
import { responseToState as cardResponseToState } from "./getCardListMapper";

export const responseToState = (deck: IDeckResponse): IDeck => ({
    id: deck.id,
    name: deck.name,
    description: deck.description,
    tags: deck.tags,
    isPrivate: deck.isPrivate,
    cards: cardResponseToState(deck.cards),
    modelType: deck.modelType,
});
