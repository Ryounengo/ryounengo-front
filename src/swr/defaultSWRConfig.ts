/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "@utils/fetchUtils";
import { AppState, AppStateStatus } from "react-native";

export const defaultSWRConfig = {
    fetcher,
    revalidateOnReconnect: false,
    provider: () => new Map(),
    initFocus(callback: any) {
        let appState = AppState.currentState;

        const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* If it's resuming from background or inactive mode to active one */
            if (appState.match(/inactive|background/) && nextAppState === "active") {
                callback();
            }
            appState = nextAppState;
        };

        // Subscribe to the app state change events
        AppState.addEventListener("change", onAppStateChange);

        return () => {
            AppState.removeEventListener("change", onAppStateChange);
        };
    },
};
