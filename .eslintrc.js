module.exports = {
    env: {
        browser: true,
        es2021: true,  // Using modern ECMAScript features
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"  // React-specific linting rules
    ],
    parser: "@babel/eslint-parser",  // Using Babel's parser for modern syntax, including JSX
    parserOptions: {
        ecmaFeatures: {
            jsx: true,  // Enabling linting of JSX
        },
        ecmaVersion: 12,  // Corresponds to ECMAScript 2021
        sourceType: "module",
        requireConfigFile: false  // No need for a babel config file
    },
    plugins: [
        "react"  // React plugin
    ],
    rules: {
        "indent": [
            "error",
            2  // Specifies 2 spaces for indentation; change to "tab" if you prefer tabs
        ],
        "linebreak-style": [
            "error",
            "unix"  // Ensure line breaks are UNIX style; use "windows" if developing on Windows
        ],
        "quotes": [
            "error",
            "double"  // Enforces double quotes
        ],
        "semi": [
            "error",
            "always"  // Enforces semicolons at the end of statements
        ],
        "react/react-in-jsx-scope": "off",  // Not necessary for React 17 and later with the new JSX transform
        "no-console": "warn"  // Warns about console usage, can be set to "error" to forbid it completely
    }
};
