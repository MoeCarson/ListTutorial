/* global module, __dirname */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

const outputDirectory = path.resolve(__dirname, 'public')
const templateDirectory = path.resolve(__dirname, 'src/templates')

const config = {
    //target: 'web',
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2|png)$/,
                use: 'file-loader'
            },
        ]
    },
    /*node: {
        fs: 'empty'
    },
*/
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TODO',
            hash: true,
            filename: path.resolve(outputDirectory, 'index.html'),
            template: path.resolve(templateDirectory, 'index.ejs')
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.svg', '.scss'],
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src'),
            path.join(__dirname, 'public')
        ]
    },
}

module.exports = {
    outputDirectory,
    templateDirectory,
    config
}