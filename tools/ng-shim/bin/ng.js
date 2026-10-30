#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const candidates = [
  path.resolve(process.cwd(), 'build.js'),
  path.resolve(__dirname, '..', '..', '..', 'build.js')
];

const target = candidates.find(p => fs.existsSync(p));
if (!target) {
  console.error('Could not find build.js from', __dirname);
  process.exit(1);
}
require(target);
