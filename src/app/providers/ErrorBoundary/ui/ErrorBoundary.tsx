import React, { ErrorInfo, ReactNode } from 'react';
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.error(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        // eslint-disable-next-line react/prop-types
        const { children } = this.props;
        if (hasError) {
            return <PageError />;
        }

        return children;
    }
}

export default ErrorBoundary;
