/**
 * Testing
 * @ndaidong
 */

const test = require('tap').test;

const AverageRating = require('../../../index');

const samples = [
  {
    p: 0,
    n: 1,
    e: 0,
  }, {
    p: 0,
    n: 5,
    e: 0,
  }, {
    p: 0,
    n: 10,
    e: 0,
  }, {
    p: 0,
    n: 20,
    e: 0,
  }, {
    p: 0,
    n: 100,
    e: 0,
  }, {
    p: 0,
    n: 1000,
    e: 0,
  }, {
    n: 0,
    p: 1,
    e: 0.21,
  }, {
    n: 0,
    p: 5,
    e: 0.57,
  }, {
    n: 0,
    p: 10,
    e: 0.72,
  }, {
    n: 0,
    p: 20,
    e: 0.84,
  }, {
    n: 0,
    p: 100,
    e: 0.96,
  }, {
    n: 0,
    p: 1000,
    e: 1,
  }, {
    n: 1,
    p: 1,
    e: 0.09,
  }, {
    n: 5,
    p: 5,
    e: 0.24,
  }, {
    n: 500,
    p: 500,
    e: 0.47,
  }, {
    n: 1000,
    p: 1000,
    e: 0.48,
  },
];

test('Testing "score" method', (assert) => {
  samples.forEach((sample) => {
    const expect = sample.e;
    const actual = Number(AverageRating.score(sample.p, sample.n));
    assert.deepEqual(actual, expect, `.score(${sample.p}, ${sample.n}) should be ${expect}`);
  });
  assert.end();
});
