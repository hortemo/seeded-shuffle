# @hortemo/seeded-shuffle

> Deterministic, seed-based shuffle for JS/TS.

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

## API

### `seededShuffle<T>(input: readonly T[], seed: string | number): T[]`

Returns a new array shuffled using a PRNG from [`seedrandom`](https://www.npmjs.com/package/seedrandom).

## Development

```bash
npm i
npm run build
npm test
```

## License

[MIT](./LICENSE)
