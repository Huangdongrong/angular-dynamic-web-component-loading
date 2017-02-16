var webpack = require('webpack');
var path = require("path");

module.exports = {
    context: __dirname,
    devtool: false,
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        libraryTarget: "window",
        library: "MyAwesomeLibrary"
    },
    externals: {
        "MyAwesomeLibrary": "MyAwesomeLibrary"
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'babel-loader!wc-loader'
        }]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: [
        //         'app',
        //         'vendor'
        //     ]
        // }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
    ]
};