declare module '*.sass' {
    interface CassNames {
        [className: string]: string
    }
    const classNames: CassNames
    export = classNames
}

declare module '*.svg' {
    import React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}
