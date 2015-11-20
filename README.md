# average-rating
Calculate  average and scoring based on Wilson Score Equation

[![NPM](https://badge.fury.io/js/average-rating.svg)](https://badge.fury.io/js/average-rating) ![Travis](https://travis-ci.org/ndaidong/average-rating.svg?branch=master)

![Google app on Google Play](http://i.imgur.com/NgQX5OW.png)

## Usage

```
import {rate, average, score} from 'average-rating';

// from 1 to 5 stars
let rating = [134055, 57472, 143135, 365957, 1448459];
rate(rating); // --> 0.84
average(rating); // --> 4.4

// get Winson score for a pair of (Positive, Negative) voting
score(0, 1000); // --> 0
score(1000, 0); // --> 0.96
score(1000, 1000); // --> 0.48
```

## Test

```
npm install
mocha
```

 _* Ensure that you have [mocha](https://mochajs.org/) installed_
