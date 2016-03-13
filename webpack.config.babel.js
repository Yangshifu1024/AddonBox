import webpack from 'webpack'

export default {
    target: "electron",
    node: {
        __dirname: false
    },
    entry: {
        app: './app/app.js',
    },
    output: {
        path: './dist',
        filename: '[name].js'
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
}
