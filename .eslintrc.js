module.exports = {
  // ... 다른 설정 ...

  // TypeScript 설정 추가
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    // ... 다른 확장 프리셋 ...
    "plugin:@typescript-eslint/recommended",
  ],

  // ... 다른 설정 ...
};
