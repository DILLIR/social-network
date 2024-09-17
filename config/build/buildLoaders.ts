import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildBabelLoader } from './loaders/buildBabelLoader';

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

    const codeBabelLoader = BuildBabelLoader(options);
    const tsxBabelLoader = BuildBabelLoader({ ...options, isTsx: true });

    const scssLoader = buildCssLoader(options.isDev);

    return [scssLoader, svgLoader, codeBabelLoader, tsxBabelLoader, fileLoader];
}
