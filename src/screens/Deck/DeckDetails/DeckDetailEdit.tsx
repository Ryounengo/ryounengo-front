import { IDeck } from "../../../types/interfaces";
import { DeckEditForm } from "../../../common/Deck/DeckEditForm";
import { useDeckEdit } from "./useDeckEdit";

interface IParams {
    deck: IDeck;
    getDeckDetails(): void;
    setIsEditMode(isEditMode: boolean): void;
}

export const DeckDetailsEdit = (props: IParams) => {
    const { deck, getDeckDetails, setIsEditMode } = props;
    const { formMethods, submit, postCreateDeckState } = useDeckEdit(deck, getDeckDetails, setIsEditMode);

    return <DeckEditForm formMethods={formMethods} isLoading={postCreateDeckState.isLoading} submit={submit} />;
};
