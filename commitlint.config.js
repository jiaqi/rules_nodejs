module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
    'scope-enum': [
      2,
      'always',
      [
        'angular',
        'builtin',
        'concatjs',
        'create',
        'cypress',
        'examples',
        'jasmine',
        'labs',
        'protractor',
        'rollup',
        'terser',
        'typescript',
        'worker',
        'docs',
      ],
    ],
  },
};
