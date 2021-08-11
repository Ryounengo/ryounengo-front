import { EDeckType } from "./CreateDeck/ICreateDeck";
import { IPagination } from "../../common";

export interface IDeck {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}

export interface IDeckFilter extends IPagination {
    name: string;
    tags?: string[];
    modelType?: EDeckType;
    isPrivate?: boolean;
}
