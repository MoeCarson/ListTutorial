/* global module */

const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js').config

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './public',
        compress: true,
        port: 3001,
        historyApiFallback: true,
        watchContentBase: false,
    }
})