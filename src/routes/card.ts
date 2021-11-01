import { AUTHENTICATED_API_ENDPOINT } from "./endpoint";

export const CARD_ROUTE = `${AUTHENTICATED_API_ENDPOINT}/cards`;

export const getCardsRoute = (query?: string) => `${CARD_ROUTE}${query ?? ""}`;

export const getCardsReviewRoute = (cardId: string) => `${CARD_ROUTE}/${cardId}/review`;
