import React, { useState } from 'react';

const OptimizedImage = ({ 
    src, 
    alt, 
    className, 
    width, 
    height,
    priority = false 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`image-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
            <img
                src={src}
                alt={alt}
                className={className}
                width={width}
                height={height}
                loading={priority ? "eager" : "lazy"}
                onLoad={() => setIsLoaded(true)}
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
            {!isLoaded && (
                <div className="image-placeholder">
                    <div className="loading-spinner"></div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage; 