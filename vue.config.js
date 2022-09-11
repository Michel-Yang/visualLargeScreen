const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.VUE_APP_PORT || 9090; // dev port

module.exports = {
  // 基本路径
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  parallel: true,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    proxy: {
      // 设置代理
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_PROXY_API
      }
    }
  },
  configureWebpack: {
    plugins: [
      //自动加载模块，而不必到处 import 或 require
      new webpack.ProvidePlugin({
        $: "jquery",
        echarts: "echarts",
        _: "lodash",
        moment: "moment"
      })
    ]
  },

  chainWebpack: config => {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // 别名
    config.resolve.alias.set("styles", resolve("src/assets/styles"));
    config.resolve.alias.set("components", resolve("src/components"));
    config.resolve.alias.set("images", resolve("src/assets/images"));
    config.resolve.alias.set("iconfont", resolve("src/iconfont"));
    config.resolve.alias.set("@", resolve("src"));

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
      });
  }
};
