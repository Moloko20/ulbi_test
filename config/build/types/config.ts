import { Configuration } from 'webpack'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

type BuildMode = Configuration['mode']

export interface BuildEnv {
    port: number
    mode: BuildMode
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}
