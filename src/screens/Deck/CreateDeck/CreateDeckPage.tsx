import { Box } from "native-base";
import { DeckType } from "./components/DeckType";
import { useState } from "react";
import { EDeckType } from "./components/ICreateDeck";

export const CreateDeckPage = () => {
    const [deckType, setDeckType] = useState<EDeckType>();

    return (
        <Box>
            <DeckType setDeckType={setDeckType} />
        </Box>
    );
};
