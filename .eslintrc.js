module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'semi': [0],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-indent': 'off',
    'prettier/prettier': 'off',
    'react/jsx-indent-props': 'off',
    'no-console': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/display-name': 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },


};
