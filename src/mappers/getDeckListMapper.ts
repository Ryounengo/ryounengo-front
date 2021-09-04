import { IDeckSummaryResponse, IDeckSummary } from "../types/interfaces";

export const responseToState = (deckResponse: IDeckSummaryResponse[]): IDeckSummary[] =>
    deckResponse.map((deck) => ({
        id: deck.id,
        name: deck.name,
        description: deck.description,
        tags: deck.tags,
        isPrivate: deck.isPrivate,
        cards: deck.cards,
        modelType: deck.modelType,
    }));
