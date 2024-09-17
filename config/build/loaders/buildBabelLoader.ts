import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function BuildBabelLoader({
    isTsx = false,
    isDev
}: BuildBabelLoaderProps) {
    const plugins = [
        ['i18next-extract', { locales: ['en', 'uk'], keyAsDefaultValue: true }],
        [
            '@babel/plugin-transform-typescript',
            {
                isTsx
            }
        ],
        '@babel/plugin-transform-runtime',
        isTsx && [
            babelRemovePropsPlugin,
            {
                props: ['data-testid']
            }
        ]
    ].filter(Boolean);

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
                plugins
            }
        }
    };
}
