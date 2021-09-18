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
}

export interface ICardEditResponse {
    front: string[];
    back: string[];
    example: string;
    type: ECardType;
    isReversed?: boolean;
}

export interface IVirtualDeckResponse {
    tags: string[];
    cards: string[];
}
