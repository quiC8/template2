const gulp = require('gulp')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bs = require('browser-sync')
const util = require('../lib/util')
const config = require('../config')

const server = (done) => {
  const {root, theme, proxy} = require('../config/backend')
  const webpackConfig = require('../webpack.config')()

  const compiler = webpack(webpackConfig)

  const bsConfig = {

    // watchOptions: {
    //   ignoreInitial: true,
    //   ignored: '*.{css,js}'
    // },
    // files: [config.getDest()]
  }
  if (util.isBackend()) {
    bsConfig['proxy'] = {
      target: proxy
    }
  } else {
    bsConfig['server'] = {
      middleware: [
        webpackDevMiddleware(compiler, {
          stats: 'errors-only',
          publicPath: '/javascripts',
          reload: true
        }),
        webpackHotMiddleware(compiler)
      ],
      baseDir: config.getDest()
    }
  }
  bs.init(bsConfig)
  // bs.watch(`${config.paths.root.dest}`).on('change', bs.reload)
  if (done) {
    done()
  }
}
gulp.task('server', server)
module.exports = server
