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
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel!eslint'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]"
            },
            { test: /\.ttf$/,    loader: "file?name=fonts/[hash].[ext]" },
            { test: /\.eot$/,    loader: "file?name=fonts/[hash].[ext]" },
            { test: /\.svg$/,    loader: "file?name=fonts/[hash].[ext]" }
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
