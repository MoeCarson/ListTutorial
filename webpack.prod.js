/* global module */
const path = require('path')
const merge = require('webpack-merge')
//const webpack = require('webpack')
const common = require('./webpack.common.js').config

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[hash]-bundle.js',
        path: path.join(__dirname, 'docs')
    },
})

