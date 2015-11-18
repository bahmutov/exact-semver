# exact-semver

> Removes fuzzy characters from listed dependencies in your package.json

[![NPM][exact-semver-icon] ][exact-semver-url]

[![Build status][exact-semver-ci-image] ][exact-semver-ci-url]
[![dependencies][exact-semver-dependencies-image] ][exact-semver-dependencies-url]
[![devdependencies][exact-semver-devdependencies-image] ][exact-semver-devdependencies-url]
[![semantic-release][semantic-image] ][semantic-url]

Install

    npm install -g exact-semver

Run in the same folder as a `package.json`

    exact-semver

Or use as a module

```js
var exactSemver = require('exact-semver');
var pkg = require('./package.json');
exactSemver(pkg);
```

You can run it as a git pre-commit hook

    npm install --save-dev pre-git exact-semver

Then add the name to the `pre-commit` configuration inside `package.json` and in
the `scripts` commands

```json
"scripts": {
  "exact-semver": "exact-semver"
},
"configuration": {
  "pre-commit": [
    "npm test",
    "npm run exact-semver"
  ]
}
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/exact-semver/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[exact-semver-icon]: https://nodei.co/npm/exact-semver.png?downloads=true
[exact-semver-url]: https://npmjs.org/package/exact-semver
[exact-semver-ci-image]: https://travis-ci.org/bahmutov/exact-semver.png?branch=master
[exact-semver-ci-url]: https://travis-ci.org/bahmutov/exact-semver
[exact-semver-dependencies-image]: https://david-dm.org/bahmutov/exact-semver.png
[exact-semver-dependencies-url]: https://david-dm.org/bahmutov/exact-semver
[exact-semver-devdependencies-image]: https://david-dm.org/bahmutov/exact-semver/dev-status.png
[exact-semver-devdependencies-url]: https://david-dm.org/bahmutov/exact-semver#info=devDependencies
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
