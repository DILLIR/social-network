import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => /\.module\.scss$/.test(path),
            localIdentName: options.isDev
              ? "[path][name]__[local]"
              : "hash:base64:8",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptLoader, scssLoader];
}
