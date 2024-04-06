module.exports = {
  '*.{ts,tsx}': [
    'eslint --report-unused-disable-directives --max-warnings 0',
    'prettier --write',
  ],
  '*.{cjs,css,html,md,json,yaml,yml}': ['prettier --write'],
};
