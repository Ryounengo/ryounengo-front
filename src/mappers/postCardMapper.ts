import { ICardEdit, ICardEditResponse } from "@typings/interfaces";

export const stateToRequest = (card: ICardEdit): ICardEditResponse => ({
    back: card.back.filter((text) => text),
    front: card.front.filter((text) => text),
    example: card.example,
    type: card.type,
    reverseCard: card.reverseCard,
});
