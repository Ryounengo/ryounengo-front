import { useDeckDetails } from "./useDeckDetails";
import { TRootNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { DeckDetailsView } from "./DeckDetailView";
import { Fragment, useState } from "react";
import { Button } from "native-base";
import { DeckDetailsEdit } from "./DeckDetailEdit";
import { ErrorAndLoading } from "@common";
import { useTranslation } from "react-i18next";

type Params = StackScreenProps<TRootNavigation, "deckDetails">;

export const DeckDetails = (props: Params) => {
    const { route } = props;
    const { params } = route;
    const { t } = useTranslation("common");

    const { deckDetails, getDeckDetailsState, getDeckDetails } = useDeckDetails(params.deckId);
    const [isEditMode, setIsEditMode] = useState(false);

    const setEditMode = () => setIsEditMode((previousState) => !previousState);

    return (
        <ErrorAndLoading error={getDeckDetailsState.error} isLoading={getDeckDetailsState.isLoading}>
            {deckDetails && (
                <Fragment>
                    <Button onPress={setEditMode}>{isEditMode ? t("cancel") : t("edit")}</Button>
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
