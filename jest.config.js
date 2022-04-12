const ignorePatterns = ['/node_modules/'];

const config = {
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest',
    },
    testEnvironment: 'node',
    collectCoverage: false,
    modulePathIgnorePatterns: ['.cache', '/dist/'],
    testPathIgnorePatterns: ignorePatterns,
    coveragePathIgnorePatterns: ignorePatterns,
    verbose: false, // otherwise it "eats" console.logs
    expand: true,
    testRegex: '((\\.|/*.)(test))\\.js?$',
    testTimeout: 30000,
};

module.exports = config;
