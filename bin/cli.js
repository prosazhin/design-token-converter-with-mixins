#!/usr/bin/env node

'use strict';

const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const build = require('../lib/build');

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

program
  .version(pkg.version, '-v, --version', 'output the current version')
  .description(pkg.description)
  .usage('[options]');

program
  .option('-p, --platform [platform...]', 'platform', ['css', 'less', 'scss'])
  .option('-s, --source [source...]', 'source', ['tokens/**/*.json'])
  .option('-o, --output <path>', 'output', './styles')
  .action(build);

program.parse(process.argv);
