import { ECardType } from "@typings/enums/ECard";

export interface ICardSummary {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    referenceCard: string;
}

export interface ICard {
    deck: string;
    front: string[];
    back: string[];
    example: string;
    id: string;
    type: ECardType;
    referenceCard: string;
}

export interface ICardEdit {
    front: string[];
    back: string[];
    example: string;
    type: ECardType;
    reverseCard?: boolean;
}
