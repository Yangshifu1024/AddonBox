import webpack from 'webpack'

export default {
    target: "electron",
    node: {
        __dirname: false
    },
    entry: {
        entry: './app/entry.js',
        app: './app/app.js',
        vendor: ['jquery']
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
        })
    ]
}
