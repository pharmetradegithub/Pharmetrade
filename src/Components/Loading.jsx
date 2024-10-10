import React, { useState, useEffect } from 'react';

const Loading = () => {
    // const [isLoading, setIsLoading] = useState(true);

    // // Simulating data loading for demonstration
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 8000); // Simulate a 5-second loading time

    //     return () => clearTimeout(timer); // Cleanup on unmount
    // }, []);

    // if (!isLoading) {
    //     return <div>Data Loaded!</div>; // Show content when data is loaded
    // }

    return (
        <div className="flex justify-center ">
            <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-8  border-transparent  border-b-blue-900 border-l-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-8 border-t-8 border-transparent border-t-blue-900  border-l-transparent rounded-full animate-spin" style={{ animationDuration: '0.75s' }}></div>
            </div>
        </div>
    );
};

export default Loading;