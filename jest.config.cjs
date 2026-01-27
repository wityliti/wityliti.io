/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js', 'mjs'],
  testMatch: ['**/server/__tests__/**/*.test.js'],
  verbose: true,
  collectCoverageFrom: [
    'server/**/*.js',
    '!server/__tests__/**',
    '!server/index.js' // Entry point has side effects
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
  setupFilesAfterEnv: ['<rootDir>/server/__tests__/setup.cjs']
}
