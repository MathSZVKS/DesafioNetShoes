module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  setupFiles: [
    './jest.setup.js' 
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};