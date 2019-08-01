const path = require('path');
// ref: https://umijs.org/config/
const reg = new RegExp('^((?!node_modules).)*((?!.css).)*$');
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: {
          loadingComponent: './components/loading.js',
        },
        title: 'dzy',
        dll: false,
        hardSource: false,
        routes: {
          exclude: [/components\//],
        },
        fastClick: true,
      },
    ],
  ],
  history: 'hash',
  theme: './theme/theme.config.js',
  cssModulesExcludes: ['.module.css', 'iconfont.css', 'global.css'],
  chainWebpack(config, { webpack }) {
    config.module
      .rule('postcss')
      .test(/\.css$/)
      .use('postcss-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 75, remPrecision: 8 });
    config.merge({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    });
  },
};
