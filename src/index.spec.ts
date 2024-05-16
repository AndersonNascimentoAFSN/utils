import { describe, beforeEach, afterEach, it, expect } from "vitest";

import { sum } from "./index";

describe("index", () => {
  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  it("should be 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
