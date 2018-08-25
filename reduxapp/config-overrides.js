const path = require('path');

module.exports = {
  jest: (config) => {
    config.modulePaths = ['src/'];
    return config;
  },
  webpack: (config, env) => {
    // config.resolve.alias.assets = path.resolve(__dirname, './src/assets');
    // config.resolve.alias.common = path.resolve(__dirname, './src/common');
    // config.resolve.alias.components = path.resolve(__dirname, './src/components');
    config.resolve.alias.features = path.resolve(__dirname, './src/features');
    // config.resolve.alias.API = path.resolve(__dirname, './src/API');
    return config;
  },
}