import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoaders = buildCssLoader(isDev);

    const svgLoaders = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoaders = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        typescriptLoaders,
        cssLoaders,
        svgLoaders,
        fileLoaders,
    ];
}
