const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: false,
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: {
        'main': './main.js',
    },    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.ractive\.html$/,
                use: 'babel-loader'
            },
            {
                test: /\.ractive\.html$/,
                use: 'ractive-bin-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    }
}