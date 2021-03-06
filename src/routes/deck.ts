import { AUTHENTICATED_API_ENDPOINT } from "./endpoint";

export const DECK_ROUTE = `${AUTHENTICATED_API_ENDPOINT}/decks`;

export const getDecksRoute = (query?: string) => `${DECK_ROUTE}${query ?? ""}`;

export const getDeckRoute = (deckId: string) => `${DECK_ROUTE}/${deckId}`;

export const joinDeckRoute = (deckId: string) => `${getDeckRoute(deckId)}/join`;

export const leaveDeckRoute = (deckId: string) => `${getDeckRoute(deckId)}/leave`;

export const getDeckAddCardRoute = (deckId: string) => `${getDeckRoute(deckId)}/add`;

export const getDeckDetailsRoute = (deckId: string, page: number) => `${getDeckRoute(deckId)}?skip=${page}`;
