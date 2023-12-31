/** @typedef  {import("prettier").Config} PrettierConfig */
/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  printWidth: 200,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrderTypeScriptVersion: "^5",
  importOrder: ["^(react/(.)$)|^(react$)", "^(next/(.)$)|^(next$)", "<THIRD_PARTY_MODULES>", "", "^@/(.*)$", "^~/(.*)$", "^[./]"]
}

module.exports = config
