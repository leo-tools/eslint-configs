'use strict';

module.exports = {
  extends: [
    '@leo-tools/eslint-config-typescript',
    require.resolve('./rules/react'),
    require.resolve('./rules/react-hooks'),
  ],
  rules: {}
};
