// components/Layout.js
import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css'

const LayOut = () => {

    const scrollContainerRef = useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        // Scroll to the top of the scrollable container when the location changes
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className='LayOutStyle' ref={scrollContainerRef}>

            <Outlet />
        </div>
    );
};


export default LayOut