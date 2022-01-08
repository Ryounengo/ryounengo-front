import { ReactElement } from "react";
import { Box } from "native-base";

interface IParams {
    children: ReactElement[];
    currentViewIndex: number;
}

export const StepperView = (props: IParams) => {
    const { children, currentViewIndex } = props;

    return (
        <Box flexDirection="row" overflow="hidden">
            <Box width="100%">{children[currentViewIndex]}</Box>
        </Box>
    );
};
