# @hortemo/seeded-shuffle

Deterministically shuffle arrays with a repeatable seed.

## Install

```bash
npm i @hortemo/seeded-shuffle
```

## Usage

```ts
import seededShuffle from "@hortemo/seeded-shuffle";

const original = [1, 2, 3, 4, 5];
const shuffled = seededShuffle(original, "my-seed");
```

### API

`seededShuffle<T>(input, seed)` returns a shuffled copy of `input` using a [`seedrandom`](https://www.npmjs.com/package/seedrandom) PRNG.
