import { useDeckDetails } from "./useDeckDetails";
import { TStackNavigation } from "../../../navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { ErrorAndLoading } from "../../../common";
import { DeckDetailsView } from "./DeckDetailView";
import { Fragment, useState } from "react";
import { Button } from "native-base";
import { DeckDetailsEdit } from "./DeckDetailEdit";

type Params = StackScreenProps<TStackNavigation, "deckDetails">;

export const DeckDetails = (props: Params) => {
    const { route } = props;
    const { params } = route;

    const { deckDetails, getDeckDetailsState, getDeckDetails } = useDeckDetails(params.deckId);
    const [isEditMode, setIsEditMode] = useState(false);

    const setEditMode = () => setIsEditMode((previousState) => !previousState);

    return (
        <ErrorAndLoading error={getDeckDetailsState.error} isLoading={getDeckDetailsState.isLoading}>
            {deckDetails && (
                <Fragment>
                    <Button onPress={setEditMode}>{isEditMode ? "Cancel" : "Edit"}</Button>
                    {isEditMode && (
                        <DeckDetailsEdit
                            deck={deckDetails}
                            getDeckDetails={getDeckDetails}
                            setIsEditMode={setIsEditMode}
                        />
                    )}
                    {!isEditMode && <DeckDetailsView deck={deckDetails} />}
                </Fragment>
            )}
        </ErrorAndLoading>
    );
};
