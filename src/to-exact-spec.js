/* global describe, it */
var la = require('lazy-ass');
var check = require('check-more-types');

describe('to-exact', function () {
  var toExact = require('./to-exact');

  it('is a function', function () {
    la(check.fn(toExact));
  });

  it('passes already strict version', function () {
    var strictVersions = ['0.1.0', '1.1.0', '0.5.1'];
    strictVersions.forEach(function (version) {
      var cleaned = toExact(version);
      la(cleaned === version,
        'already strict', version, 'cleaned to', cleaned);
    });
  });

  it('can handle one argument', function () {
    var cleaned = toExact('^4.1.0');
    la(cleaned === '4.1.0');
  });

  it('can handle two arguments', function () {
    var cleaned = toExact('foo', '^4.1.0');
    la(cleaned === '4.1.0');
  });
});
