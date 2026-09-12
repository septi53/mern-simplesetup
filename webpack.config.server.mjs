import path from 'path';
import nodeExternals from 'webpack-node-externals';

const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: "server",
    mode: "production",
    target: "node",
    entry: [path.join(CURRENT_WORKING_DIR, './server/server.mjs')],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx']
    }
};

export default config;