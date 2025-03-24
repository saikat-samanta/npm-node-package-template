import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import myPrettierConfig from './prettier.config.cjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': ['warn', myPrettierConfig],
    },
  },
  {
    ignores: ['**/*.config.{js,cjs,mjs,ts}', '**/dist/**', '**/node_modules/**'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
];
