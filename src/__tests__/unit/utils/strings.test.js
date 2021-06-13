import { findDifferences } from "../../..//utils";

describe("findDifferences tests", () => {
  it("has same sentences", () => {
    expect(findDifferences("same sentence", "same sentence")).toEqual([]);
  });

  it("has different sentences", () => {
    expect(findDifferences("same sentence", "different sentence")).toEqual([
      "different",
    ]);
  });

  it("ignores differences in special characters", () => {
    expect(findDifferences("Cómo estás", "Como estas")).toEqual([]);
  });

  it("finds differences with special characters in strict mode", () => {
    const strictMode = true;
    expect(findDifferences("Cómo estás", "Como estas", strictMode)).toEqual([
      "Como",
      "estas",
    ]);
  });
});
