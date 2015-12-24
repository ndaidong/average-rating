/**
 * Calculate average score and rating based on Wilson Score Equation
 * @ndaidong
 * Refer: https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval
 **/

'use strict'; // to use "let" keyword

var getWilsonScore = (p, n) => {
  if (p === 0 && n === 0) {
    return 0;
  }
  let r = ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt(p * n / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  return r.toFixed(2);
}

module.exports = {
  score: getWilsonScore,
  rate: (rating) => {

    var n = 0, p = 0;
    n += rating[0];
    n += rating[1] * 0.75;
    p += rating[1] * 0.25;
    n += rating[2] * 0.5;
    p += rating[2] * 0.5;
    n += rating[3] * 0.25;
    p += rating[3] * 0.75;
    p += rating[4];

    return getWilsonScore(p, n);
  },
  average: (rating) => {
    let total = rating.reduce((prev, current) => {
      return prev + current;
    });
    if (total === 0) {
      return 0;
    }
    let sum = 0, k = 1;
    rating.forEach((item) => {
      sum += item * k;
      k++;
    });
    let r = sum / total;
    return r.toFixed(1);
  }
}
