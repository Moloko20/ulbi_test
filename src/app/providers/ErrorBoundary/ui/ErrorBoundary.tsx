import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error,
        }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info)
    }

    render() {
        const { children } = this.props
        const { hasError } = this.state

        if (hasError) {
            // eslint-disable-next-line i18next/no-literal-string
            return (
                <Suspense fallback={''}>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}
