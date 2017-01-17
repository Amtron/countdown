const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require("webpack-dev-server");


const config = {
    devtool:"cheap-module-eval-source-map",
    entry: './demo/index.tsx',

    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
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
