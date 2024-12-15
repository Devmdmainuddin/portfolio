import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

// Resolve the __dirname and __filename for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with older ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  {
    ignores: [
      ".next/*",
      "*.css",
      "dist",
      "esm/*",
      "public/*",
      "tests/*",
      "scripts/*",
      "*.config.js",
      "node_modules",
      "coverage",
      "build",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
