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

  describe('dependencies', function () {
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

    it('returns true and cleans fuzzy dependencies', function () {
      var pkg = {
        dependencies: {
          foo: '^1.0.2',
          bar: '2.0.1'
        }
      };
      var needSaving = makeExact(pkg);
      la(needSaving, 'needs saving');
      la(pkg.dependencies.foo === '1.0.2', 'removed fuzziness');
    });

    it('returns true and cleans two fuzzy dependencies', function () {
      var pkg = {
        dependencies: {
          foo: '^1.0.2',
          bar: '~2.0.1'
        }
      };
      var needSaving = makeExact(pkg);
      la(needSaving, 'needs saving');
      la(pkg.dependencies.foo === '1.0.2', 'removed foo fuzziness');
      la(pkg.dependencies.bar === '2.0.1', 'removed bar fuzziness');
    });
  });

  describe('dev dependencies', function () {
    it('returns false if empty dev dependencies', function () {
      var needSaving = makeExact({
        dependencies: {},
        devDependencies: {}
      });
      la(!needSaving);
    });

    it('returns false is exact semver', function () {
      var needSaving = makeExact({
        devDependencies: {
          foo: '1.0.2',
          bar: '2.0.1'
        }
      });
      la(!needSaving);
    });

    it('returns true and cleans two fuzzy dependencies', function () {
      var pkg = {
        devDependencies: {
          foo: '^1.0.2',
          bar: '~2.0.1'
        }
      };
      var needSaving = makeExact(pkg);
      la(needSaving, 'needs saving');
      la(pkg.devDependencies.foo === '1.0.2', 'removed foo fuzziness');
      la(pkg.devDependencies.bar === '2.0.1', 'removed bar fuzziness');
    });
  });
});
