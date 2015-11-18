var isStrictSemver = require('./is-strict-semver');

function makeExact(pkg) {
  var needSaving;
  if (pkg.dependencies) {
    Object.keys(pkg.dependencies).forEach(function (name) {
      var version = pkg.dependencies[name];
      if (!isStrictSemver(version)) {
        version = toExact(version);
        pkg.dependencies[name] = version;
        needSaving = true;
      }
    });
  }
}

module.exports = makeExact;
