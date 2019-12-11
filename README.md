# average-rating
Calculate  average and scoring based on Wilson Score Equation

[![NPM](https://badge.fury.io/js/average-rating.svg)](https://badge.fury.io/js/average-rating)
[![Build Status](https://travis-ci.org/ndaidong/average-rating.svg?branch=master)](https://travis-ci.org/ndaidong/average-rating)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/average-rating/badge.svg?branch=master)](https://coveralls.io/github/ndaidong/average-rating?branch=master)

![Google app on Google Play](https://i.imgur.com/XKEEpdb.png)

## Usage

```
const {
  score,
  rate,
  average
} = require('average-rating');


// get Winson score for a pair of (Positive, Negative) voting
score(0, 1000); // --> 0
score(1000, 0); // --> 0.96
score(1000, 1000); // --> 0.48

// from 1 to 5 stars
const rating = [134055, 57472, 143135, 365957, 1448459];
rate(rating); // --> 0.84

// calculate average
average(rating); // --> 4.4
```

# API reference

### .score(Number positive, Number negative)

Return a value from 0 to 1.

Used for the systems of Positive/Negative rating, such as the videos on YouTube, the answers on StackOverflow, etc. In which, each of item can be voted as good or bad, like or dislike or something like that.

### .rate(Array ratings)

Return a value from 0 to 1.

Used for the systems of 5 rating levels, such as the applications on Google Play store, the books on Amazon, etc. In which, each of item can be voted as one of value in the range of 1 to 5 stars.

##### Update

- Since v1.1.5, this `rate` method accepts custom range of ratings. 5 or more values are OK.

```
const input = [3, 4, 2, 6, 12, 46, 134, 213, 116, 91, 45, 15, 58, 96, 1654]; // 15 values
rate(input); // => 0.85

rate([3, 4, 2, 6, 12, 46, 134, 213, 116, 91]); // => 0.74

```


### .average(Array ratings)

Return a value from 0 to 5.

Calculate normal average value for the systems of 5 rating levels.


## Test

```
git clone https://github.com/ndaidong/average-rating.git
cd average-rating
npm install
npm test
```


# License

The MIT License (MIT)
