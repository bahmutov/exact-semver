#!/usr/bin/env node

var exists = require('fs').existsSync;
var join = require('path').join;
var pkgFilename = join(process.cwd(), 'package.json');

function checkPackageExists() {
  if (!exists(pkgFilename)) {
    /* eslint no-console:0 */
    console.error('WARNING: cannot find package.json in the current folder');
    process.exit(-1);
  }
}

checkPackageExists();
