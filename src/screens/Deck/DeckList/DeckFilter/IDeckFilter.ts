import { EDeckType } from "../../../../types/enums";

export interface IFilterForm {
    name: string;
    tags: string;
    modelType: EDeckType | string;
    isPrivate: string;
}
