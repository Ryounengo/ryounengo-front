import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import { ReactNode } from "react";

type RenderParams = Parameters<typeof render>;
type RenderReturnType = ReturnType<typeof render>;
type CustomRender = (ui: RenderParams[0], renderOptions?: RenderParams[1]) => RenderReturnType;

const AllTheProviders = (props: { children: ReactNode }) => {
    const { children } = props;

    return <NativeBaseProvider>{children}</NativeBaseProvider>;
};

const customRender: CustomRender = (ui, renderOptions) => render(ui, { wrapper: AllTheProviders, ...renderOptions });

export * from "@testing-library/react-native";

export { customRender as render };
