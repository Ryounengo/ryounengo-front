import { IVirtualDeck, IVirtualDeckResponse } from "@typings/interfaces";

export const responseToState = (deck: IVirtualDeckResponse): IVirtualDeck => ({
    tags: deck.tags,
    cards: deck.cards,
});
