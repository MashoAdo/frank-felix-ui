module.exports = {
	env: {
	  browser: true,
	  es2021: true
	},
	extends: [
	  "eslint:recommended",
	  "plugin:@typescript-eslint/recommended",
	  "plugin:react/recommended",
	  "eslint-plugin-unused-imports"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
	  ecmaVersion: "latest",
	  sourceType: "module"
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
	  "@typescript-eslint/no-unused-vars": "error",
	  "no-duplicate-imports": "error",
	  "unused-imports/no-unused-imports": "warn"
	}
  }
  