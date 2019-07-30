const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.InjectManifest({
        swSrc: './public/sw.js',
      })
    ]
  }
}