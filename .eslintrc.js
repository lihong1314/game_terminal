module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jasmine": true,
  },
  "globals": {
    "wx": true,
    "Page": true,
    "App": true,
    "Component": true,
    "__DEV__": true,
    "__ENV__": true,
    "__dirname": true,
    "getApp": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "indent": [
      "error",
      2, {"SwitchCase": 1}
    ],
    'no-console': 'off',
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
  }
};
