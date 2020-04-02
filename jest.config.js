module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 8,
      functions: 20,
      lines: 17
    }
  }
};
