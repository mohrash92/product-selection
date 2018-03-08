const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry :[
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/app'
    ],
    output : {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve : {
        modules: ['node_modules', 'src'],
        extensions: [' ', '.js']
    },
    module : {
        loaders : [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot-loader',
                    'babel-loader?presets[]=react,presets[]=es2015'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};