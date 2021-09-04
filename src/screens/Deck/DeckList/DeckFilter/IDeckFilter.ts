import { EDeckType } from "@typings/enums";

export interface IFilterForm {
    name: string;
    tags: string;
    modelType: EDeckType | string;
    isPrivate: string;
}
