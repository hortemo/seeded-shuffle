import seedrandom from "seedrandom";

/**
 * Seed type accepted by the shuffle function.
 */
export type Seed = string | number;

/**
 * Deterministically shuffles a copy of `input` using a seed.
 *
 * Uses the Fisher–Yates algorithm with a PRNG from `seedrandom`.
 * The original array is **not mutated**.
 *
 * @example
 *   import seededShuffle from "seeded-shuffle";
 *   const result = seededShuffle([1, 2, 3, 4], "my-seed");
 *
 * @param input - The array to shuffle. It is not modified.
 * @param seed - Seed value (number or string). Same seed ⇒ same order.
 * @returns A new array with the elements shuffled deterministically.
 */
export default function seededShuffle<T>(input: readonly T[], seed: Seed): T[] {
  const rng = seedrandom(String(seed));
  // Copy to avoid mutating the original array
  const arr = input.slice();

  // Fisher–Yates shuffle (in-place on the copy)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1)); // 0 <= j <= i
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}
