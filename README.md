# average-rating
Calculate  average and scoring based on Wilson Score Equation

[![NPM](https://badge.fury.io/js/average-rating.svg)](https://badge.fury.io/js/average-rating)
[![Build Status](https://travis-ci.org/ndaidong/average-rating.svg?branch=master)](https://travis-ci.org/ndaidong/average-rating)
[![codecov](https://codecov.io/gh/ndaidong/average-rating/branch/master/graph/badge.svg)](https://codecov.io/gh/ndaidong/average-rating)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/average-rating.svg)](https://gemnasium.com/github.com/ndaidong/average-rating)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/ff38031c-c6ba-4606-92e9-ebe07d649fa7/badge)](https://nodesecurity.io/orgs/techpush/projects/ff38031c-c6ba-4606-92e9-ebe07d649fa7)

![Google app on Google Play](http://i.imgur.com/NgQX5OW.png)

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
let rating = [134055, 57472, 143135, 365957, 1448459];
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
