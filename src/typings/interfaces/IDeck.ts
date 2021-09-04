import { ICardSummary } from "./ICard";

export interface IDeckSummary {
    id: string;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}

export interface IDeck {
    id: string;
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
