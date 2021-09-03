import { IPagination } from "../../common";
import { EDeckType } from "../../types/enums";

export interface IDeckFilter extends IPagination {
    name: string;
    tags?: string[];
    modelType?: EDeckType;
    isPrivate?: boolean;
}
