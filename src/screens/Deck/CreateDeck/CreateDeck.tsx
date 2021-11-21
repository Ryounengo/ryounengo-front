import { useCreateDeck } from "./useCreateDeck";
import { DeckEditForm } from "@common/Deck";

export const CreateDeck = () => {
    const { formMethods, submit, isLoading } = useCreateDeck();

    return <DeckEditForm formMethods={formMethods} isLoading={isLoading} submit={submit} />;
};
