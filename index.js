module.exports = {
  plugins: ["lodash", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: ["plugin:lodash/canonical", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: false,
    node: true
  },
  rules: {
    camelcase: 0,
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "comma-spacing": ["error", { before: false, after: true }],
    "space-infix-ops": ["error", { int32Hint: false }],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "object-curly-spacing": ["error", "always"],
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "default-case-last": 0,
    "default-param-last": 0,
    "function-paren-newline": 0,
    "jsx-quotes": [2, "prefer-single"],
    "no-param-reassign": 0,
    "no-restricted-exports": 0,
    "lodash/import-scope": 1,
    "lodash/path-style": [2, "as-needed"],
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_"
      }
    ],
    "no-restricted-imports": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "operator-linebreak": 0,
    "prefer-destructuring": 2,
    semi: ["error", "always"]
  },
  overrides: [
    {
      files: ["./src/**/*.*", "./framework/**/*.*"],
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  ]
};

