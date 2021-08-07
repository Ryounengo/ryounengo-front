import { EDeckType } from "./CreateDeck/ICreateDeck";

export interface IDeck {
    id: string;
    modelType: EDeckType;
    description: string;
    tags: string[];
    cards: string[];
    isPrivate: boolean;
    name: string;
}
