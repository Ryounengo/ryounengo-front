import { CardTypeForm } from "@screens/Card/EditCard/CardTypeForm";
import { CardEditRectoForm } from "@screens/Card/EditCard/CardEditRectoForm";
import { useEditCard } from "@screens/Card/EditCard/useEditCard";
import { CardEditVersoForm } from "@screens/Card/EditCard/CardEditVersoForm";
import { StackScreenProps } from "@react-navigation/stack";
import { TRootNavigation } from "@navigation/INavigation";
import { StepperView } from "@common/Stepper/StepperView/StepperView";
import { FormProvider } from "react-hook-form";
import { StepperBar } from "@common/Stepper/StepperBar/StepperBar";
import { EEditCardStep } from "@screens/Card/EditCard/ICreateCard";
import { Box } from "native-base";

type TParams = StackScreenProps<TRootNavigation, "editCard">;

export const CardEdit = (props: TParams) => {
    const { route } = props;
    const { isLoading, submitRecto, step, submitType, submit, formMethods, setStep } = useEditCard(route.params.deck);

    return (
        <Box p={4}>
            <StepperBar setStep={setStep} step={step} stepNumber={Object.keys(EEditCardStep).length / 2} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <FormProvider {...formMethods}>
                <StepperView currentViewIndex={step}>
                    <CardTypeForm submitType={submitType} />
                    <CardEditRectoForm submitRecto={submitRecto} />
                    <CardEditVersoForm isLoading={isLoading} submit={submit} />
                </StepperView>
            </FormProvider>
        </Box>
    );
};
