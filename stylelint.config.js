module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    indentation: "tab",
    "order/properties-alphabetical-order": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
  },
  ignoreFiles: ["**/node_modules/**", "**/.next/**"],
};
