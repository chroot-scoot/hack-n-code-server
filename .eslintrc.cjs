/* eslint-env node */
module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:drizzle/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'drizzle'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: true,
  },
  rules: {
    'prefer-const': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-shadow': 'warn',
  },
};
