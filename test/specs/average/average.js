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
