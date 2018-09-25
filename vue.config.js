const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const routes = require(path.resolve(__dirname, 'src/routes.js'))

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        routes: routes.map(route => route.path),
        staticDir: path.join(__dirname, 'dist')
      })
    ]
  }
}