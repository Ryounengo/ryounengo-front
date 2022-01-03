import { ECardType } from "@typings/enums";

export interface IDeckSummaryResponse {
    id: string;
    description: string;
    tags: string[];
    cards: number;
    isPrivate: boolean;
    name: string;
    defaultReviewReverseCard: boolean;
    defaultCardType: ECardType;
}
