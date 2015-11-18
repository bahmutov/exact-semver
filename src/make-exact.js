var isStrictSemver = require('./is-strict-semver');
var toExact = require('./to-exact');

function makeExactDependencies(dependencies) {
  var needSaving;
  if (dependencies) {
    Object.keys(dependencies).forEach(function (name) {
      var version = dependencies[name];
      if (!isStrictSemver(version)) {
        version = toExact(version);
        dependencies[name] = version;
        needSaving = true;
      }
    });
  }

  return needSaving;
}

function makeExact(pkg) {
  if (!pkg) {
    throw new Error('Missing package object');
  }
  return makeExactDependencies(pkg.dependencies) ||
    makeExactDependencies(pkg.devDependencies);
}

module.exports = makeExact;
