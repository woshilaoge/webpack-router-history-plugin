const path = require('path')
const fs = require('fs')

class RouterHistoryPlugin {
  /**
   * routes:Array ['home','error'] 不设置，默认使用 routePath 规则
   * routePath:String 改目录下的文件夹以及文件会生成目标页面
   */
  constructor(options = {}) {
    this.options = Object.assign(
      { routes: null, routePath: 'src/views' },
      options
    )
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'RouterHistoryPlugin',
      (compilation, callback) => {
        let routePages = this.options.routes
        if (!routePages) {
          const routes = path.resolve(
            __dirname,
            `../../${this.options.routePath}`
          )
          const routeList = fs.readdirSync(routes)
          routePages = routeList.map(item =>
            item.replace('.vue', '').toLocaleLowerCase()
          )
        }
        routePages.map(file => {
          compilation.assets[`${file}/index.html`] = {
            source() {
              // .replace(/<title>([\S\s]*?)<\/title>/, `<title>${'哈哈哈'}</title>`)
              return compilation.assets['index.html'].source()
            },
            size() {
              return compilation.assets['index.html'].source().length
            }
          }
        })
        // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
        callback()
      }
    )
  }
}

module.exports = RouterHistoryPlugin
