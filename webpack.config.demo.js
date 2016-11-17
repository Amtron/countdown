'use strict';

const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require("webpack-dev-server");


const config = {
    devtool:"cheap-module-eval-source-map",
    entry: './demo/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: "bundle.js" 
       },

    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugin:[
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    }
};

module.exports = config;
