const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const routes = require(path.resolve(__dirname, 'src/routes.js'))

const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push(new PrerenderSPAPlugin({
    routes: routes.map(route => route.path),
    staticDir: path.join(__dirname, 'docs'),
    renderer: new Renderer({
      renderAfterDocumentEvent: 'ready-to-render',
      maxConcurrentRoutes: 1,
      injectProperty: '__PRERENDER_INJECTED',
      inject: {
        prerender: true
      }
    })
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