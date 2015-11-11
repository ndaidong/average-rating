# average-rating
Calculate  average and scoring based on Wilson Score Equation

![Travis](https://travis-ci.org/ndaidong/average-rating.svg?branch=master)

![Google app on Google Play](http://i.imgur.com/NgQX5OW.png)

## Usage

```
import Calculator from 'average-rating';

// from 1 to 5 stars
let rating = [134055, 57472, 143135, 365957, 1448459];
let score = Calculator.score(rating); // --> 0.84
let average = Calculator.average(rating); // --> 4.4
```


## Test

```
npm install
mocha
```

 _* Ensure that you have [mocha](https://mochajs.org/) installed_
