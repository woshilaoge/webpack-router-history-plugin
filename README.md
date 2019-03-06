# webpack-router-history-plugin

![](https://img.shields.io/npm/v/webpack-router-history-plugin.svg)

> A webpack scp upload plugin webpack4.x
> 无需后端支持，实现 h5 history 路由
> 告别 /#/home ==> /home

## Installation

```bash
npm i -D webpack-router-history-plugin
```

## Usage

add following code to your webpack config file.

> vuecli3

```javascript
const WebpackRouterHistoryPlugin = require('webpack-router-history-plugin')
module.exports = {
  ...
  configureWebpack: {
    plugins: [
      new WebpackRouterHistoryPlugin({
        routes:['home','error']
      })
    ]
  }
}
```

> 如上配置，给 webpack plugins 设置好后，在 webpack 进行构建完毕后会执行 dist 目录下的文件目录生成
> 也可设置以某个目录下的文件和文件夹生成目标目录 

```js
  new WebpackRouterHistoryPlugin({
    routePath:'src/views' // default
  })
```

```

```bash
npm run build

# build 完毕后，会自动依据生成文件的 index.html 进行复制和新建目录
```

## License

This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php).
