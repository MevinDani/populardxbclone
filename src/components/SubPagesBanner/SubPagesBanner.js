import React, { useEffect, useState } from 'react'
import './SubPagesBanner.css'

const SubPagesBanner = ({ main, desc }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`SubPagesBannerWrap ${isVisible ? 'animate-slide-up' : ''}`}>

            <div className='SubPagesMainText'>{main}</div>
            <div className='SubPagesDescText'>{desc}</div>
        </div>
    )
}

export default SubPagesBanner