import { ICardSummary } from "./ICard";
import { IPagination } from "@typings/interfaces/IPagination";

export interface IDeckFilter extends IPagination {
    name?: string;
    tags?: string[];
    isPrivate?: boolean;
}

export interface IDeckSummary {
    id: string;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}

export interface IVirtualDeck {
    tags: string[];
    cards: string[];
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
