import { Box, Button, CheckIcon, Text } from "native-base";
import { ReactElement } from "react";
import { useStyle } from "./style";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

interface IParams {
    step: number;
    setStep: (stepL: number) => void;
    stepNumber: number;
}

export const StepperBar = (props: IParams) => {
    const { step, setStep, stepNumber } = props;
    const style = useStyle();
    const goToStep = (newStep: number) => setStep(newStep);
    const textDisabledColor = useContrastTextColor(style.disabled.backgroundColor);
    const textColor = useContrastTextColor(style.stepButton.backgroundColor);

    const stepperList: ReactElement[] = [];

    for (let renderedStep = 0; renderedStep < stepNumber; renderedStep++) {
        stepperList.push(
            <>
                <Button
                    disabled={step < renderedStep}
                    style={[style.stepButton, step < renderedStep ? style.disabled : undefined]}
                    onPress={() => goToStep(renderedStep)}
                >
                    {step > renderedStep && <CheckIcon color={textColor} size={4} />}
                    {step <= renderedStep && (
                        <Text color={step < renderedStep ? textDisabledColor : textColor}>{renderedStep}</Text>
                    )}
                </Button>
                {renderedStep !== stepNumber - 1 && (
                    <Box style={[style.separator, step <= renderedStep ? style.disabled : undefined]} />
                )}
            </>
        );
    }

    return (
        <Box flexDirection="row" flexWrap="wrap" marginBottom={6}>
            {stepperList.map((stepper) => stepper)}
        </Box>
    );
};
