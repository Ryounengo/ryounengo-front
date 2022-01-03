export interface IPagination {
    limit: number;
    skip: number;
}

export interface IPaginatedResponse<T> {
    content: T;
    totalElements: number;
}
