import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [['i18next-extract', { locales: ['en', 'uk'], keyAsDefaultValue: true }]],
            },
        },
    };

    const scssLoader = buildCssLoader(options.isDev);

    return [scssLoader, svgLoader, babelLoader, typescriptLoader, fileLoader];
}
