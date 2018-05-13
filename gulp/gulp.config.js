var pluginConfig = require('./gulp-plugin.config');

var src = "./src";
var dist = "./dist";

var config = {
  path: {
    root: "./",
    packageJson: "./package.json",
    tmp: './temp',
    content: {
      base: './content'
    },
    src: {
      base: src
    },
    dist: {
      base: dist
    }
  }
};

module.exports = Object.assign({}, config, pluginConfig);