import { Fragment, ReactNode } from "react";
import { IError } from "..";
import { Spinner, Text } from "native-base";

interface IParams {
    children: ReactNode;
    skeleton?: ReactNode;
    error?: IError;
    isLoading: boolean;
}

export const ErrorAndLoading = (props: IParams) => {
    const { children, error, isLoading, skeleton } = props;
    const showSkeleton = !error && isLoading;

    let element = children;

    if (error) {
        element = <Text>{error.message}</Text>;
    } else if (showSkeleton) {
        element = skeleton ? skeleton : <Spinner />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <Fragment>{element}</Fragment>;
};
