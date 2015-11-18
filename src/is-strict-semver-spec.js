/* global describe, it */
var la = require('lazy-ass');
var check = require('check-more-types');

describe('is-strict-semver', function () {
  var isStrictSemver = require('./is-strict-semver');

  it('is a function', function () {
    la(check.fn(isStrictSemver));
  });

  it('returns false for undefined', function () {
    la(!isStrictSemver());
  });

  it('passes strict versions', function () {
    la(isStrictSemver('0.1.0'));
    la(isStrictSemver('1.1.0'));
    la(isStrictSemver('1.1.20'));
    la(isStrictSemver('10.1.0'));
  });

  it('fails fuzzy chars', function () {
    la(!isStrictSemver('~0.1.0'), '~');
    la(!isStrictSemver('^0.1.0'), '^');
  });

  it('fails wildcards', function () {
    la(!isStrictSemver('0.1.*'), '* patch');
    la(!isStrictSemver('0.*.0'), '* minor');
    la(!isStrictSemver('*.1.2'), '* major');
  });

  it('fails on missing numbers', function () {
    la(!isStrictSemver('1'), 'major only');
    la(!isStrictSemver('1.0'), 'minor');
  });

  it('fails on tags', function () {
    la(!isStrictSemver('1.0.0-foo'));
  });
});
