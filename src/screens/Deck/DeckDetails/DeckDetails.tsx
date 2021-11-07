import { useDeckDetails } from "./useDeckDetails";
import { TRootNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { DeckDetailsView } from "./DeckDetailView";
import { Fragment, useState } from "react";
import { Button, ScrollView } from "native-base";
import { DeckDetailsEdit } from "./DeckDetailEdit";
import { ErrorAndLoading } from "@common";
import { useTranslation } from "react-i18next";
import { RefreshControl } from "react-native";

type Params = StackScreenProps<TRootNavigation, "deckDetails">;

export const DeckDetails = (props: Params) => {
    const { route } = props;
    const { params } = route;
    const { t } = useTranslation("common");

    const { deckDetails, refresh, error, isRefreshLoading } = useDeckDetails(params.deckId);
    const [isEditMode, setIsEditMode] = useState(false);

    const setEditMode = () => setIsEditMode((previousState) => !previousState);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshLoading} onRefresh={refresh} />}>
            <ErrorAndLoading error={error} isLoading={!deckDetails}>
                {deckDetails && (
                    <Fragment>
                        <Button onPress={setEditMode}>{isEditMode ? t("cancel") : t("edit")}</Button>
                        {isEditMode && (
                            <DeckDetailsEdit
                                deck={deckDetails}
                                getDeckDetails={refresh}
                                setIsEditMode={setIsEditMode}
                            />
                        )}
                        {!isEditMode && <DeckDetailsView deck={deckDetails} />}
                    </Fragment>
                )}
            </ErrorAndLoading>
        </ScrollView>
    );
};
