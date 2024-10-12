import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildBabelLoader } from './loaders/buildBabelLoader';
import { buildImgLoader } from './loaders/buildImgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const fileLoader = buildImgLoader();
    const codeBabelLoader = BuildBabelLoader(options);
    const tsxBabelLoader = BuildBabelLoader({ ...options, isTsx: true });
    const scssLoader = buildCssLoader(options.isDev);

    return [scssLoader, svgLoader, codeBabelLoader, tsxBabelLoader, fileLoader];
}
