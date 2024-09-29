module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{js,jsx}",
      "!src/index.js", 
      "!src/store/store.js",
      "src/App.js"  // Include App.js for coverage
    ],
    coverageReporters: ["json", "lcov", "text", "clover"],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest", // Transform JavaScript and JSX/TSX files using Babel
      },
      transformIgnorePatterns: [
        "/node_modules/(?!(axios)/)", // Ignore all node_modules except axios
      ],
      moduleFileExtensions: ["js", "jsx"],
      testEnvironment: "jsdom", // For React components testing
  };
  