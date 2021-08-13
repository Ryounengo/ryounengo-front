import { AUTHENTICATED_API_ENDPOINT } from "./endpoint";

export const getDeckRoute = (query?: string) => `${AUTHENTICATED_API_ENDPOINT}/decks${query ?? ""}`;
