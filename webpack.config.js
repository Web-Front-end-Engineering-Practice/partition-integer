const webpack = require('webpack');
const dateFormat = require('dateformat');

const env = process.env.NODE_ENV;

const isDev = env === 'development';

const pkg = JSON.parse(require('fs').readFileSync('package.json', 'utf-8'));

const now = new Date();
const timestamp = dateFormat(now, 'yyyy-mm-dd HH:MM:ss Z');

const endYear = now.getFullYear()

const config = {
    eslint: {
        configFile: '.eslintrc'
    },
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: __dirname,
        filename: "partition-integer.js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.BannerPlugin('/*! partition-integer.js ' + (isDev ? 'Development' : 'Release') + ' v' + pkg.version +
            ' Build ' + timestamp + ' | github.com/anonymous/partition-integer | MIT */\n', {
                raw: true,
                entryOnly: true
            })
    ]
};

if (!isDev) {
    config.plugins.unshift(new webpack.optimize.UglifyJsPlugin({
        comments: /DO_NOT_PRESERVE_ANY/,
        compressor: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            warnings: false
        }
    }));
}
module.exports = config;