module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // prettier
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
