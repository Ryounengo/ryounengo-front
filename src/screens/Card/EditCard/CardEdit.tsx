import { CardTypeForm } from "@screens/Card/EditCard/CardTypeForm";
import { CardEditRectoForm } from "@screens/Card/EditCard/CardEditRectoForm";
import { useEditCard } from "@screens/Card/EditCard/useEditCard";
import { CardEditVersoForm } from "@screens/Card/EditCard/CardEditVersoForm";
import { StackScreenProps } from "@react-navigation/stack";
import { TLoggedNavigation } from "@navigation/INavigation";
import { StepperView } from "@common/Stepper/StepperView/StepperView";
import { FormProvider } from "react-hook-form";
import { StepperBar } from "@common/Stepper/StepperBar/StepperBar";
import { Box } from "native-base";
import { useTranslation } from "react-i18next";

type TParams = StackScreenProps<TLoggedNavigation, "editCard">;

export const CardEdit = (props: TParams) => {
    const { route } = props;
    const { t } = useTranslation("card");
    const { isLoading, submitRecto, step, submitType, submit, formMethods, setStep } = useEditCard({
        deck: route.params.deck,
        deckId: route.params.deckId,
        card: route.params.card,
    });
    const stepTitles = [t("type"), t("front"), t("back")];

    return (
        <Box p={10}>
            <StepperBar setStep={setStep} step={step} stepTitles={stepTitles} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <FormProvider {...formMethods}>
                <StepperView currentViewIndex={step} stepTitles={stepTitles}>
                    <CardTypeForm isEdit={Boolean(route.params.card)} submitType={submitType} />
                    <CardEditRectoForm submitRecto={submitRecto} />
                    <CardEditVersoForm isLoading={isLoading} submit={submit} />
                </StepperView>
            </FormProvider>
        </Box>
    );
};
