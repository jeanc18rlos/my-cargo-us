module.exports = {
  preset: "ts-jest",
  rootDir: "src",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./internal/jest-setup.ts"],
  coverageReporters: ["text", "html"],
  coverageDirectory: "<rootDir>/coverage/",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",

    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub"}
};
