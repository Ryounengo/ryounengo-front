import { EDeckType } from "@typings/enums";
import { IPagination } from "@typings/interfaces/IPagination";

export interface IDeckFilter extends IPagination {
    name: string;
    tags?: string[];
    modelType?: EDeckType;
    isPrivate?: boolean;
}
