const webpack = require('webpack');
const path = require('path');



const config = {
    entry: path.join(__dirname, '/src/ReactTimers.tsx'),

    output: {
        path: path.join(__dirname, 'SRC'),
        filename: "ReactTimers.js" 
       },

    resolve: {
        extensions: [ '.js', '.jsx']
    },
    externals: {
        "react": "React"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        })
    ],

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
