module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/app/**/*.{js,jsx}',
    'src/components/**/*.{js,jsx}',
    'src/utils/**/*.{js,jsx}',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['./enzyme.setup.js'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|docs|node_modules|public)[/\\\\]',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
