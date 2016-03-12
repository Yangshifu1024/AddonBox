import webpack from 'webpack'

export default {
    target: "electron",
    entry: {
        entry: './app/app.js',
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
    }
}
