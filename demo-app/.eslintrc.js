const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  // eslint-disable-next-line no-undef
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"),
);

// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  settings: {
    react: {
      version: "lastest",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "react/react-in-jsx-scope": "off",
  },
};
