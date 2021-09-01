module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    indent: ["error", 2, { ignoredNodes: ["ConditionalExpression"] }],
    semi: [2, "always"],
    "space-before-function-paren": ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
};