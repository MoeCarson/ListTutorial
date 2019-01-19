/* global module */
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js').config

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    devServer: {
        contentBase: './public',
        //compress: true,
        port: 3001,
        //historyApiFallback: true,
        //watchContentBase: false,
    },

    plugins: [new webpack.NamedModulesPlugin()]
})