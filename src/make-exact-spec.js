/* global describe, it */
var la = require('lazy-ass');
var check = require('check-more-types');

describe('make exact', function () {
  var makeExact = require('./make-exact');

  it('is a function', function () {
    la(check.fn(makeExact));
  });

  it('returns false if there are no dependencies', function () {
    var needSaving = makeExact({});
    la(!needSaving);
  });

  it('returns false if empty dependencies', function () {
    var needSaving = makeExact({
      dependencies: {}
    });
    la(!needSaving);
  });

  it('returns false is exact semver', function () {
    var needSaving = makeExact({
      dependencies: {
        foo: '1.0.2',
        bar: '2.0.1'
      }
    });
    la(!needSaving);
  });
});
