const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require("webpack-dev-server");


const config = {
    devtool:"cheap-module-eval-source-map",
    entry: path.join(__dirname, 'demo/index.tsx'),
    output: {
        path: path.join(__dirname, "/"),
        publicPath: "/",
        filename: 'bundle.js'
    },
    devServer:{
        port:"3000",
        historyApiFallback:true,
        hot:true,
        progress:true,
    },

    resolve: {
        extensions: ['.js', '.jsx' ,'.ts', '.tsx']
    },

    performance: {
        hints: false
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],  

    module: {
        loaders: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loaders: ['awesome-typescript-loader']
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};

module.exports = config;
