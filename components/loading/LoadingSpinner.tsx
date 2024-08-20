import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-lightgrey bg-opacity-25">
            <div className="w-12 h-12 border-4 bg-darkgreen rounded-full animate-ping border-mediumgreen"></div>
        </div>
    );
};

export default LoadingSpinner;
