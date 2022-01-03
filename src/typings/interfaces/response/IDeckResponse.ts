import { ICardSummaryResponse } from "./ICardResponse";
import { IPaginatedResponse } from "@typings/interfaces/IPagination";
import { ECardType } from "@typings/enums";

export interface IDeckResponse {
    id: string;
    description: string;
    tags: string[];
    cards: IPaginatedResponse<ICardSummaryResponse[]>;
    isPrivate: boolean;
    name: string;
    defaultReviewReverseCard: boolean;
    defaultCardType: ECardType;
}
