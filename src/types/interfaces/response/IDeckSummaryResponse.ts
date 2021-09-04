import { EDeckType } from "../../enums";

export interface IDeckSummaryResponse {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}
