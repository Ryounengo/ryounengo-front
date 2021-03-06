import { responseToState as cardResponseToState } from "./getCardListMapper";
import { IDeck, IDeckResponse } from "@typings/interfaces";

export const responseToState = (deck: IDeckResponse): IDeck => ({
    id: deck.id,
    name: deck.name,
    description: deck.description,
    tags: deck.tags,
    isPrivate: deck.isPrivate,
    cards: cardResponseToState(deck.cards),
    defaultCardType: deck.defaultCardType,
    defaultReviewReverseCard: deck.defaultReviewReverseCard,
    isReviewed: deck.isReviewed,
    isOwn: deck.isOwn,
    isToReview: deck.isToReview,
});
