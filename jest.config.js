/* eslint-disable */
const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
    ...tsjPreset,
    preset: "react-native",
    globals: {
        "ts-jest": {
            babelConfig: true,
        },
    },
    testEnvironment: "node",
    rootDir: "./",
    roots: ["<rootDir>"],
    verbose: true,
    testTimeout: 5000,
    testURL: "http://localhost/",
    transform: {
        ...tsjPreset.transform,
        "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/android/", "<rootDir>/android/"],
    moduleDirectories: ["node_modules", "testConfiguration"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/testConfiguration/jestFileMock.ts",
    },
};
