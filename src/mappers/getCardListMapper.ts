import { ICardSummary, ICardSummaryResponse } from "@typings/interfaces";

export const responseToState = (cardList: ICardSummaryResponse[]): ICardSummary[] =>
    cardList.map((card) => ({
        id: card.id,
        front: card.front,
        back: card.back,
        deck: card.deck,
        example: card.example,
        referenceCard: card.referenceCard,
        type: card.type,
    }));