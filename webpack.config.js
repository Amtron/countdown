const webpack = require('webpack');
const path = require('path');



const config = {
    entry: path.join(__dirname, '/src/index.tsx'),

    output: {
        path: path.join(__dirname, 'src'),
        filename: "index.js" 
       },

    resolve: {
        extensions: ['.ts', '.tsx']
    },

    module: {
        loaders: [
        {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }
        ]
    }
};

module.exports = config;
