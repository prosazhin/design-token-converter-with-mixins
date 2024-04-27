const buildTokens = require('./build-tokens.js');
const buildMixins = require('./build-mixins.js');

function build(options) {
  buildTokens(options);
  buildMixins(options);
}

module.exports = build;
