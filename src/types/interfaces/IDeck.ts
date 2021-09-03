import { EDeckType } from "../enums";
import { ICardSummary } from "./ICard";

export interface IDeckSummary {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}

export interface IDeck {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: ICardSummary[];
    isPrivate: boolean;
    name: string;
}

export interface IDeckEditForm {
    name: string;
    description: string;
    tags: string;
    isPrivate: boolean;
}
