module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
