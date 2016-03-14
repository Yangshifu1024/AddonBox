import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    target: "electron",
    node: {
        __dirname: false
    },
    entry: {
        app: './app/app.js',
        entry: './app/entry.js',
    },
    output: {
        path: './dist',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel!eslint'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PluginBox',
            template: './app/index.ejs',
            excludeChunks: ['entry']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
}
