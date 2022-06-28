'use strict';

module.exports = {
  extends: [
    '@leo-tools/eslint-config-base',
    require.resolve('./rules/react'),
    require.resolve('./rules/react-hooks'),
  ],
  rules: {}
};
