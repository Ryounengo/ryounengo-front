import { ICard, IReversedCard } from "@typings/interfaces";

export const getReverseCard = (card: ICard): IReversedCard => ({
    reverseToReview: card.reverseToReview,
    deck: card.deck,
    toReview: card.toReview,
    back: card.front,
    front: card.back,
    id: card.id,
    type: card.type,
    example: card.example,
    isReversed: true,
});
