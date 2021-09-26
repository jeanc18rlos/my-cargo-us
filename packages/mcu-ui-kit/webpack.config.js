const path = require('path');
const { DefinePlugin } = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const webpackConfig = () => ({
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  externals: [
    '@ant-design/colors',
    '@ant-design/icons',
    '@artsy/fresnel',
    'antd',
    'framer-motion',
    'polished',
    'react',
    'react-custom-scrollbars',
    'react-dom',
    'react-intersection-observer',
    'react-intl',
    'styled-components',
    'swiper',
    'typescript'
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      })
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, './src')],
        options: {},
        exclude: [
          '/(node_modules)/',
          '/(build)/',
          '/(scripts)/',
          '/(.storybook)/',
          '/(src/internal)/',
          '/(src/**/*.test.tsx)/',
          '/(src/**/*.stories.tsx)/'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff|eot|woff2)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },

      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // DefinePlugin allows you to create global constants which can be configured at compile time
    new DefinePlugin({
      'process.env': process.env.production || !process.env.development
    })
  ]
});

module.exports = webpackConfig;
