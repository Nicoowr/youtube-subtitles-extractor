/* eslint sort-keys-fix/sort-keys-fix: 0 */

module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotFormat: {
    printBasicPrototype: false,
  },
};
