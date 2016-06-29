/**
 * Testing
 * @ndaidong
 */

var test = require('tape');

var AverageRating = require('../../../index');

var samples = require('../samples');

test('Testing "average" method', (assert) => {

  samples.forEach((sample) => {
    let rating = sample.rating;
    let expect = sample.expect.average;
    let actual = Number(AverageRating.average(rating));
    let s = rating.join(', ');
    assert.deepEqual(actual, expect, `.average([${s}]) should be ${expect}`);
  });

  assert.end();
});
