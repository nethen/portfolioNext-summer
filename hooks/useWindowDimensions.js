import React from "react";
import { useState, useEffect } from "react";

// Code loosely based off https://dev.to/reedbarger/how-to-create-a-usewindowsize-react-hook-2bcm

const useWindowDimensions = () => {
    const [viewport, setViewport] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return viewport;
}

export default useWindowDimensions;