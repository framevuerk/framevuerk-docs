const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const routes = require(path.resolve(__dirname, 'src/routes.js'))

const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push(new PrerenderSPAPlugin({
    routes: routes.map(route => route.path),
    staticDir: path.join(__dirname, 'dist')
  }))
}
module.exports = {
  chainWebpack: config => {
    config.module.rule('raw').test(/\.raw$/).use('raw-loader').loader('raw-loader').end()
  },
  configureWebpack: {
    plugins: plugins
  }
}