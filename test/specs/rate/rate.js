/**
 * Testing
 * @ndaidong
 */

const test = require('tape');

const AverageRating = require('../../../index');

const samples = require('../samples');

test('Testing "rate" method', (assert) => {
  samples.forEach((sample) => {
    let rating = sample.rating;
    let expect = sample.expect.score;
    let actual = Number(AverageRating.rate(rating));
    let s = rating.join(', ');
    assert.deepEqual(actual, expect, `.rate([${s}]) should be ${expect}`);
  });

  assert.end();
});

test('Testing "rate" with custom range', (assert) => {
  let data = [
    {
        input: [3, 4, 2, 6, 12, 46, 134, 213, 116, 91, 45, 15, 58, 96, 1654],
        expect: 0.85,
    },
    {
      input: [3, 4, 2, 6, 12, 46, 134, 213, 116, 91],
      expect: 0.74,
    },
    {
      input: [1311, 655, 1008, 1847, 4685, 13522, 31570, 34238, 18180, 11029],
      expect: 0.72,
    },
    {
      input: [125, 166, 17, 290, 400, 310],
      expect: 0.62,
    },
    {
        input: [125, 166, 17, 290, 400, 310, 1800],
        expect: 0.79,
    },
  ];

  data.map((sample) => {
    let {
      input,
      expect,
    } = sample;
    let actual = AverageRating.rate(input);
    let params = input.join(', ');
    assert.deepEqual(actual, expect, `.rate([${params}]) should be ${expect}`);
    return actual;
  });

  assert.end();
});
