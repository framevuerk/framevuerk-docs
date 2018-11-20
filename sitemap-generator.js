const path = require('path')
const fs = require('fs')
const outputPath = path.resolve(__dirname, './docs/sitemap.xml')
const sm = require('sitemap')
const routes = require(path.resolve(__dirname, 'src/routes.js'))
const options = {
  hostname: 'https://framevuerk.com',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: []
}
const today = new Date()
routes.forEach(route => {
  options.urls.push({
    url: route.path,
    changefreq: 'daily',
    priority: route.priority,
    lastmod: today.toString()
  })
})
const sitemap = sm.createSitemap(options)

// Gives you a string containing the XML data
const xml = sitemap.toString()

fs.writeFileSync(outputPath, xml)