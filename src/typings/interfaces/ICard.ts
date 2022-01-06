import { ECardType } from "@typings/enums/ECard";

export interface ICardSummary {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    toReview: boolean;
    reverseToReview: boolean;
}

export interface ICard {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    toReview: boolean;
    reverseToReview: boolean;
}

export interface IReversedCard extends ICard {
    isReversed: true;
}

export interface ICardEdit {
    front: string[];
    back: string[];
    example: string;
    type: ECardType;
    reverseCard: boolean;
}
