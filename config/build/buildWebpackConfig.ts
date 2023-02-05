import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'

import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolves } from './buildResolves'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
    return {
        mode: options.mode,

        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
        },

        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        plugins: buildPlugins(options),

        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    }
}
