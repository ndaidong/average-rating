# average-rating

Calculate average and scoring based on Wilson Score Equation

![CodeQL](https://github.com/ndaidong/average-rating/workflows/CodeQL/badge.svg)
[![CI test](https://github.com/ndaidong/average-rating/workflows/ci-test/badge.svg)](https://github.com/ndaidong/average-rating/actions)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/average-rating/badge.svg)](https://coveralls.io/github/ndaidong/average-rating)
[![NPM](https://img.shields.io/npm/v/%40ndaidong%2Faverage-rating?color=32bb24)](https://www.npmjs.com/package/@ndaidong/average-rating)
[![JSR](https://jsr.io/badges/@ndaidong/average-rating?color=32bb24)](https://jsr.io/@ndaidong/average-rating)

![Google app on Google Play](https://i.imgur.com/XKEEpdb.png)

## Setup & Usage

### Deno

https://jsr.io/@ndaidong/average-rating

```sh
deno add @ndaidong/average-rating

# npm (use any of npx, yarn dlx, pnpm dlx, or bunx)
npx jsr add @ndaidong/average-rating
```

```ts
// es6 module
import { average, rate, score } from "@ndaidong/average-rating";

// CommonJS
const {
  score,
  rate,
  average,
} = require("@ndaidong/average-rating");

score(80, 20); // => 0.71
rate([134055, 57472, 143135, 365957, 1448459]); // => 0.84
average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

You can use JSR packages without an install step using `jsr:` specifiers:

```ts
import { average } from "jsr:@ndaidong/average-rating";

average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

You can also use `npm:` specifiers as before:

```ts
import { average } from "npm:@ndaidong/average-rating";

average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

Or import from esm.sh

```ts
import { average } from "https://esm.sh/@ndaidong/average-rating";

average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

### Node.js & Bun

https://www.npmjs.com/package/@ndaidong/average-rating

```bash
npm i @ndaidong/average-rating
# pnpm
pnpm i @ndaidong/average-rating
# yarn
yarn add @ndaidong/average-rating
# bun
bun add @ndaidong/average-rating
```

```ts
import { average } from "@ndaidong/average-rating";

average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

You can also use CJS style:

```ts
const { average } = require("@ndaidong/average-rating");

average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

### Browsers:

```html
<script type="module">
import { average } from "https://esm.sh/@ndaidong/average-rating";
// import { average } from 'https://unpkg.com/@ndaidong/average-rating/esm/mod.js';

average([134055, 57472, 143135, 365957, 1448459]) // => 4.4
</script>
```

## APIs

### .score(Number positive, Number negative)

This method returns a normalized value between 0 and 1, but it's applicable for systems
with only positive and negative ratings (like/dislike, thumbs up/thumbs down).
Examples include videos on YouTube or answers on Stack Overflow.
In these systems, users can express their opinion by voting for either a positive or negative option.

Let's illustrate how this method works with a blog post that received 80 likes and 20 dislikes:

```ts
import { score } from "@ndaidong/average-rating";

score(80, 20); // => 0.71
```

### .rate(Array ratings)

This method returns a normalized value between 0 and 1, commonly used in rating systems with 5 levels.
Examples include applications on Google Play Store or books on Amazon.
In these systems, each item receives a user rating between 1 and 5 stars.

Let's take a product with a large volume of reviews as an example. Here's how we calculate its rating:

- 134,055 customers rated it 1 star
- 57,472 gave it a 2-star rating
- There are 143,135 ratings of 3 stars
- It received a 4-star rating from 365,957 users
- And a whopping 1,448,459 customers rated it 5 stars

```ts
import { rate } from "@ndaidong/average-rating";

rate([134055, 57472, 143135, 365957, 1448459]); // => 0.84
```

##### Update

- Since v1.1.5, this `rate` method accepts custom range of ratings. 5 or more
  values are OK.

```ts
const input = [3, 4, 2, 6, 12, 46, 134, 213, 116, 91, 45, 15, 58, 96, 1654]; // 15 values
rate(input); // => 0.85

rate([3, 4, 2, 6, 12, 46, 134, 213, 116, 91]); // => 0.74
```

### .average(Array ratings)

Return a value from 0 to 5.

Calculate normal average value for the systems of 5 rating levels.

```ts
import { average } from "@ndaidong/average-rating";

average([134055, 57472, 143135, 365957, 1448459]); // => 4.4
```

## Development

Since v3.x.x, we switched to [Deno](https://docs.deno.com/runtime/manual/)
platform, and use [DNT](https://github.com/denoland/dnt) to build Node.js
packages.

```bash
git clone https://github.com/ndaidong/average-rating.git
cd average-rating

# test
deno test

# build npm packages
deno task build

cd npm
node test_runner.js
```

# License

The MIT License (MIT)

---
