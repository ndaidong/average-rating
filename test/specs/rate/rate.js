/**
 * Testing
 * @ndaidong
 */

/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/

'use strict';

var path = require('path');
var test = require('tape');

var samples = require('../samples');

var rootDir = '../../../src/';

var AverageRating = require(path.join(rootDir, 'average-rating'));

test('Testing "rate" method', (assert) => {

  samples.forEach((sample) => {
    let rating = sample.rating;
    let expect = sample.expect.score;
    let actual = Number(AverageRating.rate(rating));
    let s = rating.join(', ');
    assert.deepEqual(actual, expect, `.rage([${s}]) should be ${expect}`);
  });

  assert.end();
});
