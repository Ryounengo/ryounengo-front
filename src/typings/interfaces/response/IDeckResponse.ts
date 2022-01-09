import { ICardResponse } from "./ICardResponse";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";
import { ECardType } from "@typings/enums";

export interface IDeckResponse {
    id: string;
    description: string;
    tags: string[];
    cards: IPaginatedResponse<ICardResponse[]>;
    isPrivate: boolean;
    name: string;
    isReviewed: boolean;
    defaultReviewReverseCard: boolean;
    defaultCardType: ECardType;
    isOwn: boolean;
    isToReview: boolean;
}
