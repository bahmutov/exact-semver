#!/usr/bin/env node

var exists = require('fs').existsSync;
var load = require('fs').readFileSync;
var save = require('fs').writeFileSync;
var join = require('path').join;
var pkgFilename = join(process.cwd(), 'package.json');

function verifyPackageExists() {
  if (!exists(pkgFilename)) {
    /* eslint no-console:0 */
    console.error('WARNING: cannot find package.json in the current folder');
    process.exit(-1);
  }
}

verifyPackageExists();

var pkg = JSON.parse(load(pkgFilename));
var makeExact = require('../src/make-exact');
var needSaving = makeExact(pkg);
if (needSaving) {
  save(pkgFilename, JSON.stringify(pkg, null, 2) + '\n');
  console.log('saved exact semver numbers in %s', pkgFilename);
}
