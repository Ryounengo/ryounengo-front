import { ICardSummaryResponse } from "./ICardResponse";

export interface IDeckResponse {
    id: string;
    description: string;
    tags: string[];
    cards: ICardSummaryResponse[];
    isPrivate: boolean;
    name: string;
}
