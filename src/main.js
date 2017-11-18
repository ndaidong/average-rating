/**
 * Calculate average score and rating based on Wilson Score Equation
 * @ndaidong
 * Refer: https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval
 **/

const score = (p, n) => {
  if (p === 0 && n === 0) {
    return 0;
  }
  let r = ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt(p * n / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  return r.toFixed(2);
};

const rate = (rating) => {
  let n = 0;
  let p = 0;
  n += rating[0];
  n += rating[1] * 0.75;
  p += rating[1] * 0.25;
  n += rating[2] * 0.5;
  p += rating[2] * 0.5;
  n += rating[3] * 0.25;
  p += rating[3] * 0.75;
  p += rating[4];

  return score(p, n);
};

const average = (rating) => {
  let total = rating.reduce((prev, current) => {
    return prev + current;
  }, 0);

  if (total === 0) {
    return 0;
  }

  let sum = 0;
  let k = 1;
  rating.forEach((item) => {
    sum += item * k;
    k++;
  });
  let r = sum / total;
  return r.toFixed(1);
};

module.exports = {
  score,
  rate,
  average,
};
