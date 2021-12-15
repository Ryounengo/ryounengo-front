import { extendTheme } from "native-base";

export const theme = extendTheme({
    colors: {
        primary: {
            50: "#f4e3ff",
            100: "#d5b2ff",
            200: "#b77fff",
            300: "#9b4cff",
            400: "#7e1aff",
            500: "#6500e6",
            600: "#4e00b4",
            700: "#380082",
            800: "#220050",
            900: "#0d0020",
        },
        error: {
            50: "#ffe3ed",
            100: "#ffb6ca",
            200: "#f888a6",
            300: "#f35882",
            400: "#ef2a5f",
            500: "#d51045",
            600: "#a70936",
            700: "#780425",
            800: "#4a0016",
            900: "#1f0008",
        },
    },
    fontConfig: {
        Rubik: {
            300: {
                normal: "Rubik-Light",
            },
            400: {
                normal: "Rubik-Regular",
            },
            500: {
                normal: "Rubik-Medium",
            },
            700: {
                normal: "Rubik-Bold",
            },
        },
        CatCafe: {
            300: {
                normal: "CatCafe",
            },
            400: {
                normal: "CatCafe",
            },
            500: {
                normal: "CatCafe",
            },
            700: {
                normal: "CatCafe",
            },
        },
    },
    fonts: {
        body: "Rubik",
        heading: "CatCafe",
    },
    components: {
        Button: {
            baseStyle: {
                rounded: "md",
            },
        },
        Text: {
            baseStyle: {
                fontFamily: "Rubik",
            },
            variants: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                caption: ({ colorMode }) => ({
                    color: colorMode === "dark" ? "dark.500" : "dark.300",
                }),
            },
        },
        Input: {
            defaultProps: {
                variant: "underlined",
            },
        },
        FAB: {
            baseStyle: {
                borderRadius: 10,
                backgroundColor: "#6500e6",
            },
            defaultProps: {
                placement: "bottom-right",
                renderInPortal: false,
            },
        },
    },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
    interface ICustomTheme extends CustomThemeType {
        fonts: {
            body: string;
            heading: string;
        };
    }
}
