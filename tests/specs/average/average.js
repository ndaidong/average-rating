/**
 * Testing
 * @ndaidong
 */

const test = require('tap').test;

const AverageRating = require('../../../index');

const samples = require('../samples');

test('Testing "average" method', (assert) => {
  samples.forEach((sample) => {
    const rating = sample.rating;
    const expect = sample.expect.average;
    const actual = Number(AverageRating.average(rating));
    const s = rating.join(', ');
    assert.deepEqual(actual, expect, `.average([${s}]) should be ${expect}`);
  });

  assert.end();
});
