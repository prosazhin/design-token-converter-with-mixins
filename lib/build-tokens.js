const StyleDictionary = require('style-dictionary');

function buildTokens({ source, platform, output }) {
  const buildConfig = {
    source: source,
    platforms: {
      js: {
        transformGroup: 'js',
        transforms: ['name/cti/kebab'],
        buildPath: `${output}/js/`,
        files: [
          {
            format: 'javascript/module',
            destination: 'index.js',
          },
        ],
      },
    },
  };

  platform.forEach((item) => {
    buildConfig.platforms[item] = {
      transformGroup: item,
      transforms: ['name/cti/kebab'],
      buildPath: `${output}/${item}/`,
      files: [
        {
          format: `${item}/variables`,
          destination: `index.${item}`,
        },
      ],
    };
  });

  StyleDictionary.extend(buildConfig).buildAllPlatforms();
}

module.exports = buildTokens;
