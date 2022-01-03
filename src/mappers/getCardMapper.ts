import { ICardResponse, ICard } from "@typings/interfaces";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";

export const responseToState = (response: IPaginatedResponse<ICardResponse[]>): IPaginatedResponse<ICard[]> => ({
    content: response.content.map((card) => ({
        id: card.id,
        front: card.front,
        back: card.back,
        deck: card.deck,
        example: card.example,
        referenceCard: card.referenceCard,
        type: card.type,
        toReview: card.toReview || card.reverseToReview,
    })),
    totalElements: response.totalElements,
});
