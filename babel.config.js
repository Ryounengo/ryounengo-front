module.exports = {
    presets: [
        "module:metro-react-native-babel-preset",
        "@babel/preset-typescript",
        [
            "@babel/preset-react",
            {
                runtime: "automatic",
            },
        ],
    ],
    plugins: [
        [
            "module:react-native-dotenv",
            {
                allowUndefined: false,
            },
        ],
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [
                    ".ios.ts",
                    ".ios.tsx",
                    ".android.ts",
                    ".android.tsx",
                    ".ts",
                    ".tsx",
                    ".jsx",
                    ".js",
                    ".json",
                ],
                alias: {
                    "@navigation": "./src/navigation",
                    "@typings": "./src/typings",
                    "@common": "./src/common",
                    "@static": "./src/static",
                    "@routes": "./src/routes",
                    "@mappers": "./src/mappers",
                    "@utils": "./src/utils",
                    "@screens": "./src/screens",
                },
            },
        ],
    ],
};
