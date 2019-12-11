/**
 * Calculate average score and rating based on Wilson Score Equation
 * @ndaidong
 * Refer: https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval
 **/

const score = (p, n) => {
  if (p === 0 && n === 0) {
    return 0;
  }
  const r = ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt(p * n / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  return Number(r.toFixed(2));
};


const rate = (rating) => {
  const size = rating.length;

  let n = rating[0];
  let p = rating[size - 1];

  const step = (1 / (size - 1)).toFixed(2);
  const totalStep = size - 1;
  for (let i = 1; i < totalStep; i++) {
    const ep = (step * i).toFixed(2);
    p += rating[i] * ep;
    n += rating[totalStep - i] * ep;
  }
  return score(p, n);
};


const average = (rating) => {
  const total = rating.reduce((prev, current) => {
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
  const r = sum / total;
  return Number(r.toFixed(1));
};


module.exports = {
  score,
  rate,
  average,
};
