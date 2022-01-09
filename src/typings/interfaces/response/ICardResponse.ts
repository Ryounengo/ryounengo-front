import { ECardType } from "@typings/enums/ECard";

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
    isReverse: boolean;
}

export interface ICardEditResponse {
    front: string[];
    back: string[];
    example: string;
    type: ECardType;
    reverseCard: boolean;
}
