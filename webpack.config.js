const webpack = require('webpack');
const path = require('path');



const config = {
    entry: path.join(__dirname, '/src/index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "ReactTimers.js" 
       },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [ 
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        })
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
