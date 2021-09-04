import { ICardResponse, ICardSummary } from "../types/interfaces";

export const responseToState = (cardList: ICardResponse[]): ICardSummary[] =>
    cardList.map((card) => ({
        id: card.id,
        front: card.front,
        back: card.back,
        deck: card.deck,
        example: card.example,
        referenceCard: card.referenceCard,
    }));
