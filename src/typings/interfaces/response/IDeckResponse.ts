import { ICardResponse } from "./ICardResponse";

export interface IDeckResponse {
    id: string;
    description: string;
    tags: string[];
    cards: ICardResponse[];
    isPrivate: boolean;
    name: string;
}
