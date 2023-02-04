declare module '*.sass' {
    interface CassNames {
        [className: string]: string
    }
    const classNames: CassNames
    export = classNames
}
