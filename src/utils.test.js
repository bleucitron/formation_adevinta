import { describe, it, expect } from "vitest";
import { isFrenchTweet } from "./utils.js";

describe("isFrenchTweet", () => {
  it("should return true for a french tweet", () => {
    const result = isFrenchTweet({ lang: "fr" });

    expect(result).toBe(true);
  });

  it("should return false for an non-french tweet", () => {
    const result1 = isFrenchTweet({ lang: "en" });
    const result2 = isFrenchTweet({});

    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  it("should return false for an french canadian tweet", () => {
    const result = isFrenchTweet({ lang: "fr-ca" });

    expect(result).toBe(true);
  });

  it("should throw an error for no tweet", () => {
    expect(() => isFrenchTweet()).toThrow();
  });
});
