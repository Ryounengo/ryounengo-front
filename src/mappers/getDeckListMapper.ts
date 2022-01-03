import { IDeckSummary, IDeckSummaryResponse } from "@typings/interfaces";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";

export const responseToState = (
    deckResponse: IPaginatedResponse<IDeckSummaryResponse[]>
): IPaginatedResponse<IDeckSummary[]> => ({
    content: deckResponse.content.map((deck) => ({
        id: deck.id,
        name: deck.name,
        description: deck.description,
        tags: deck.tags,
        isPrivate: deck.isPrivate,
        cards: deck.cards,
        defaultReviewReverseCard: deck.defaultReviewReverseCard,
        defaultCardType: deck.defaultCardType,
    })),
    totalElements: deckResponse.totalElements,
});
