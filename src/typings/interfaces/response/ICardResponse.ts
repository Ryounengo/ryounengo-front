import { ECardType } from "@typings/enums/ECard";

export interface ICardSummaryResponse {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    referenceCard: string;
}

export interface ICardResponse {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    referenceCard: string;
    toReview: boolean;
    reverseToReview: boolean;
}

export interface ICardEditResponse {
    front: string[];
    back: string[];
    example: string;
    type: ECardType;
    reverseCard: boolean;
}
