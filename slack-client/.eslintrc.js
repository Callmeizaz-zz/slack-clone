module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: [0, "single", { avoidEscape: true }],
    "comma-dangle": ["error", "only-multiline"],
    "import/extensions": [2, "never"],
    "arrow-body-style": 0,
    "no-underscore-dangle": "off",
    "no-console": "off",
  },
};
