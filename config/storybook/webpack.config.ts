import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPath } from '../build/types/config';

export default function ({ config }: { config: webpack.Configuration }) {
    const paths: BuildPath = {
        src: path.resolve(__dirname, '../../src'),
        entry: '',
        html: '',
        build: ''
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module = config.module || {};
    config.module.rules = config.module?.rules?.map((rule) => {
        if (
            typeof rule === 'object' &&
            rule != null &&
            rule.test != null &&
            /svg/.test(rule.test.toString())
        ) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push(buildSvgLoader());
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API_URL__: JSON.stringify("http://localhost:8000"),
            __PROJECT__: JSON.stringify("storybook")
        })
    );

    return config;
}
