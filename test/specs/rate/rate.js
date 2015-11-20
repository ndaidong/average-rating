/**
 * Testing
 * @ndaidong
 */
/* global describe it */
/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/

'use strict';

var path = require('path');
var chai = require('chai');

chai.should();
var expect = chai.expect;

var samples = require('../samples');

var rootDir = '../../../src/';

var AverageRating = require(path.join(rootDir, 'average-rating'));

describe('.rate()', () => {

  samples.forEach((sample) => {
    let rating = sample.rating;
    let expectation = sample.expect.score;
    describe(rating.join(', '), () => {
      let result = Number(AverageRating.rate(rating));
      it(' should be ' + expectation, (done) => {
        expect(result).to.equal(expectation);
        done();
      });
    });
  });
});
