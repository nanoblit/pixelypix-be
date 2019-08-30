module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    node: true,
    es6: true
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.]
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "no-debugger": 1,
    "func-names": 0,
    "no-console": 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"]
      }
    }
  }
};