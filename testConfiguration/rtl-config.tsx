import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import { ReactNode } from "react";
import { i18n } from "../src/i18n/i18n";
import { NavigationContainer } from "@react-navigation/native";
import { I18nextProvider } from "react-i18next";

type RenderParams = Parameters<typeof render>;
type RenderReturnType = ReturnType<typeof render>;
type CustomRender = (ui: RenderParams[0], renderOptions?: RenderParams[1]) => RenderReturnType;

const AllTheProviders = (props: { children: ReactNode }) => {
    const { children } = props;

    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <NativeBaseProvider>{children}</NativeBaseProvider>
            </NavigationContainer>
        </I18nextProvider>
    );
};

const customRender: CustomRender = (ui, renderOptions) => render(ui, { wrapper: AllTheProviders, ...renderOptions });

export * from "@testing-library/react-native";

export { customRender as render };
