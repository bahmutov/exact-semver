var isStrict = require('./is-strict-semver');

// code duplication against
// https://github.com/bahmutov/grunt-nice-package/blob/master/tasks/nice_package.js
function removeFuzziness(version) {
  return version
    .replace('^', '')
    .replace('~', '');
}

function toExact(name, version) {
  if (arguments.length === 1) {
    version = name;
    name = 'unknown';
  }
  var cleaned = removeFuzziness(version);
  if (!isStrict(cleaned)) {
    // TODO look up in the installed dependency if any
    /* eslint no-console:0 */
    console.error('could not clean up %s version %s', name, cleaned);
    return version;
  }
  return cleaned;
}

module.exports = toExact;
