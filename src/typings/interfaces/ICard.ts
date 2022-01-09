import { ECardType } from "@typings/enums/ECard";

export interface ICard {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    toReview: boolean;
    reverseToReview: boolean;
    isReversedCard: boolean;
}

export interface IReversedCard extends ICard {
    isReverse: true;
}
