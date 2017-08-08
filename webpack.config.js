const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                include: path.join(__dirname, 'src/')
            }, {
                test: /\.ttf$|\.woff|\.woff2|\.svg|\.eot$/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html', filename: 'index.html', inject: 'body'})],
    devServer: {
        port: 9000,
        historyApiFallback: true
    }
};
