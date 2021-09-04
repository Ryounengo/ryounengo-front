import { EDeckType } from "../../enums";
import { ICardResponse } from "./ICardResponse";

export interface IDeckResponse {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: ICardResponse[];
    isPrivate: boolean;
    name: string;
}
