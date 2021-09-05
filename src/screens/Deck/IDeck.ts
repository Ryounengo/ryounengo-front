import { IPagination } from "@typings/interfaces/IPagination";

export interface IDeckFilter extends IPagination {
    name: string;
    tags?: string[];
    isPrivate?: boolean;
}
