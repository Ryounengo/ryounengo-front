import { IDeck, IDeckSummary } from "@typings/interfaces";

export const deckToSummary = (deck: IDeck): IDeckSummary => ({
    id: deck.id,
    tags: deck.tags,
    isPrivate: deck.isPrivate,
    name: deck.name,
    cards: deck.cards.map((card) => card.id),
    description: deck.description,
});
