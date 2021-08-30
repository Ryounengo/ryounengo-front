import { EDeckType } from "../../CreateDeck/ICreateDeck";

export interface IFilterForm {
    name: string;
    tags: string;
    modelType: EDeckType | string;
    isPrivate: string;
}
