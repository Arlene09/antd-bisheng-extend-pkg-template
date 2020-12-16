const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

const alertLessConfig = (rules) => {
  rules.forEach((rule) => {
    if (rule.loader && rule.loader.includes('less-loader')) {
      rule.options = rules.options || {};
      rule.options.javascriptEnabled = true;
    } else if (rule.use) {
      alertLessConfig(rule.use);
    }
  });
};

const alertCssConfig = (rules) => {
  rules.forEach((rule) => {
    if (rule.loader && rule.loader.includes('css-loader')) {
      rule.options = Object.assign(rules.options || {}, {
        modules: 'global'
      });
      // rule.options.javascriptEnabled = true;
    } else if (rule.use) {
      alertCssConfig(rule.use);
    }
  });
};

const resetTsConfig = (rules) => {
  rules.forEach((rule) => {
    if (rule.test && rule.test.toString() === /\.tsx?$/.toString()) {
      rule.use.forEach((tsRule) => {
        if (tsRule.loader && /ts-loader/.test(tsRule.loader)) {
          tsRule.loader = require.resolve('ts-loader');
        }
      });
    }
  });
};

const filePath = '';

module.exports = {
  history: 'hash',
  hash: true,
  port: 9000,
  source: {
    guide: ['./guide'],
    packages: './packages'
  },
  output: './docs',
  theme: './theme',
  htmlTemplate: './theme/static/template.html',
  entiryName: 'index',
  root: filePath,
  themeConfig: {
    home: '/guide/introduce',
    sitename: 'react组件库包',
    github: 'https://github.com/benjycui/bisheng',
     },
  devServerConfig: {},
  webpackConfig(config) {
    config.devtool = 'source-map';
    if (process.env.NODE_ENV === 'production') {
      config.devtool = 'none';
      config.mode = 'production';
      config.optimization = {
        splitChunks: {
          minSize: 30000,
          cacheGroups: {
            antd: {
              test: /[\\/]node_modules[\\/]antd[\\/]/,
              name: 'vendor-antd',
              chunks: 'all'
            },
            vendor: {
              test: /[\\/]node_modules[\\/](react|react-dom|moment|react-document-title|bind-decorator)[\\/]/,
              name: 'vendor-common',
              chunks: 'all'
            },
          }
        }
      };
    }
    alertLessConfig(config.module.rules);
    alertCssConfig(config.module.rules);
    resetTsConfig(config.module.rules);
    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));
    return config;
  },
  root: `${filePath}/`
};
