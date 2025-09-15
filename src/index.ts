import seedrandom from "seedrandom";

/** Seed value accepted by `seededShuffle`. */
export type Seed = string | number;

/**
 * Returns a deterministically shuffled copy of `input` using `seed`.
 *
 * Implements Fisher–Yates with a `seedrandom` PRNG and leaves `input` untouched.
 */
export default function seededShuffle<T>(input: readonly T[], seed: Seed): T[] {
  const rng = seedrandom(String(seed));
  const arr = input.slice(); // copy input to keep original untouched

  // Fisher–Yates on the copy
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}
