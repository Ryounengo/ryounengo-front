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
    ],
};
