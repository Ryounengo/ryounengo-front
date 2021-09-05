import { ICardResponse, ICard } from "@typings/interfaces";

export const responseToState = (cardList: ICardResponse[]): ICard[] =>
    cardList.map((card) => ({
        id: card.id,
        front: card.front,
        back: card.back,
        deck: card.deck,
        example: card.example,
        referenceCard: card.referenceCard,
        type: card.type,
        toReview: card.toReview,
    }));
