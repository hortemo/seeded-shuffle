import { describe, it, expect } from "vitest";
import seededShuffle from "../src/index";

function multisetEquals<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  const counts = new Map<T, number>();
  for (const x of a) counts.set(x, (counts.get(x) ?? 0) + 1);
  for (const y of b) {
    const c = counts.get(y);
    if (!c) return false;
    if (c === 1) counts.delete(y);
    else counts.set(y, c - 1);
  }
  return counts.size === 0;
}

describe("seededShuffle", () => {
  it("is deterministic for a given seed", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const a = seededShuffle(arr, "abc");
    const b = seededShuffle(arr, "abc");
    expect(a).toEqual(b);
  });

  it("changes with a different seed", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const a = seededShuffle(arr, "abc");
    const b = seededShuffle(arr, "xyz");
    expect(a).not.toEqual(b);
  });

  it("does not mutate the input array", () => {
    const original = [1, 2, 3, 4, 5];
    const copy = original.slice();
    seededShuffle(original, 42);
    expect(original).toEqual(copy);
  });

  it("returns a permutation (same multiset)", () => {
    const arr = ["a", "b", "c", "a"];
    const shuffled = seededShuffle(arr, 123);
    expect(multisetEquals(arr, shuffled)).toBe(true);
  });

  it("handles empty arrays", () => {
    expect(seededShuffle([], "seed")).toEqual([]);
  });
});
