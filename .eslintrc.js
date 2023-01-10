module.exports = {
  root: true,
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  rules: {
    "no-unused-expressions": 0,
    "@typescript-eslint/no-unused-vars": 0,
  },
  globals: {},
};
