function isStrictSemver(version) {
  // TODO use check-more-types when available
  // https://github.com/kensho/check-more-types/issues/31
  var pattern = /^[0-9]+\.[0-9]+\.[0-9]+$/;
  return pattern.test(version);
}

module.exports = isStrictSemver;
