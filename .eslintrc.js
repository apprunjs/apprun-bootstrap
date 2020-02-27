module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: 'app'
    }
  },
  rules: {
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-key': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    // 'no-var': 0
  }
};
