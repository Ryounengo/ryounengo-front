import { ICardSummary } from "./ICard";
import { IPaginatedResponse, IPagination } from "@typings/interfaces/IPagination";
import { ECardType } from "@typings/enums";

export interface IDeckFilter extends IPagination {
    isReviewed: boolean;
    name?: string;
    tags?: string[];
    isToReview?: boolean;
}

export interface IDeckSummary {
    id: string;
    name: string;
    description: string;
    tags: string[];
    cards: number;
    isPrivate: boolean;
    defaultCardType: ECardType;
    defaultReviewReverseCard: boolean;
}

export interface IDeck {
    id: string;
    description: string;
    tags: string[];
    cards: IPaginatedResponse<ICardSummary[]>;
    isPrivate: boolean;
    name: string;
    defaultReviewReverseCard: boolean;
    defaultCardType: ECardType;
}

export interface IDeckEditForm {
    name: string;
    description: string;
    tags: string;
    isPrivate: boolean;
    defaultReviewReverseCard: boolean;
    defaultCardType: ECardType;
}
