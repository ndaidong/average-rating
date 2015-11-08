# average-rating
Calculate  average and scoring based on Wilson Score Equation

![Google app on Google Play](http://i.imgur.com/NgQX5OW.png)

## Usage

```
import Calculator from 'average-rating';

// from 1 to 5 stars
let rating = [134055, 57472, 143135, 365957, 1448459];
let score = Calculator.score(rating); // --> 0.84
let average = Calculator.average(rating); // --> 4.4
```
