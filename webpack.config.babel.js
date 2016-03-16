import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
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
                loader: 'vue'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel!eslint'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(woff|woff2)\??.*$/,
                loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            },
            {
                test: /\.ttf\??.*$/,
                loader: "file?name=fonts/[name].[ext]"
            },
            {
                test: /\.eot\??.*$/,
                loader: "file?name=fonts/[name].[ext]"
            },
            {
                test: /\.svg\??.*$/,
                loader: "file?name=fonts/[name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
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
            'window.jQuery': 'jquery',
            Vue: 'vue'
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
}
