import { ReactElement } from "react";
import { Box, Heading } from "native-base";

interface IParams {
    children: ReactElement[];
    currentViewIndex: number;
    stepTitles: string[];
}

export const StepperView = (props: IParams) => {
    const { children, currentViewIndex, stepTitles } = props;

    return (
        <>
            <Heading mb={4} textAlign="center">
                {stepTitles[currentViewIndex]}
            </Heading>
            <Box width="100%">{children[currentViewIndex]}</Box>
        </>
    );
};
