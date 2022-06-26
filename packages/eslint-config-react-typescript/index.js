'use strict';

module.exports = {
  extends: [
    'eslint-config-typescript',
    require.resolve('./rules/react'),
    require.resolve('./rules/react-hooks'),
  ],
  rules: []
};
