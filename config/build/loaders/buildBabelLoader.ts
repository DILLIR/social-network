import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function BuildBabelLoader({
    isDev,
    isTsx = false,
}: BuildBabelLoaderProps) {
    const isProd = !isDev;
    const plugins = [
        [
            '@babel/plugin-transform-typescript',
            {
                isTsx,
            },
        ],
        '@babel/plugin-transform-runtime',
        isTsx && isProd && [
            babelRemovePropsPlugin,
            {
                props: ['data-testid'],
            },
        ],
    ].filter(Boolean);

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
                plugins,
            },
        },
    };
}
