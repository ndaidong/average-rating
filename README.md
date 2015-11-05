# average-rating
Calculate  average and scoring based on Wilson Score Equation

## Usage

```
import Calculator from 'average-rating';

// from 1 to 5 stars
let rating = [9524, 4158, 10177, 25971, 68669];
let score = Calculator.score(rating); // --> 0.79
let average = Calculator.average(rating); // --> 4.2
```
