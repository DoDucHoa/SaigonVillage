import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to an error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-container">
                    <h2>Something went wrong.</h2>
                    <button 
                        onClick={() => window.location.reload()}
                        className="retry-button"
                    >
                        Retry
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;