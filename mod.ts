// mod.ts
// ref: https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval

/**
 * Calculate score for the systems of Positive/Negative rating
 *
 * @param p Positive rating value
 * @param n Negative rating value
 * @returns a float value from 0 to 1
 */
export const score = (p: number = 0, n: number = 0): number => {
  if (p === 0 && n === 0) {
    return 0;
  }
  const r: number = ((p + 1.9208) / (p + n) -
    1.96 * Math.sqrt(p * n / (p + n) + 0.9604) / (p + n)) /
    (1 + 3.8416 / (p + n));
  return Number(r.toFixed(2));
};

/**
 * Calculate score for the systems of 5 rating levels
 *
 * @param rating An array of rating value
 * @returns a float value from 0 to 1
 */
export const rate = (rating: number[] = []): number => {
  const size: number = rating.length;

  let n: number = rating[0];
  let p: number = rating[size - 1];

  const step: number = Number((1 / (size - 1)).toFixed(2));
  const totalStep: number = size - 1;
  for (let i = 1; i < totalStep; i++) {
    const ep: number = Number((step * i).toFixed(2));
    p += rating[i] * ep;
    n += rating[totalStep - i] * ep;
  }
  return score(p, n);
};

/**
 * Calculate average value for the systems of 5 rating levels
 *
 * @param rating An array of rating value
 * @returns a float value from 0 to 1
 */
export const average = (rating: number[] = []): number => {
  const total: number = rating.reduce((prev, current) => {
    return prev + current;
  }, 0);

  if (total === 0) {
    return 0;
  }

  let sum: number = 0;
  let k: number = 1;
  rating.forEach((item) => {
    sum += item * k;
    k++;
  });
  const r: number = sum / total;
  return Number(r.toFixed(1));
};
