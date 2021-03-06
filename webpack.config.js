module.exports = {
    entry: './src/client/index.js',

    output: {
        path: './dist/',
        filename: 'client.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
