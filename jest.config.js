module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/src/**/*.test.js"],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 8,
      functions: 20,
      lines: 17
    }
  },
  moduleNameMapper: {
    // module must come first
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./test/style-mock.js")
    // can also map files that are loaded by webpack with the file-loader
  }
};
