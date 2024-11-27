import React, { useEffect, useState } from 'react'
import './AboutMainBanner.css'


const AboutMainBanner = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutMainBannerWrap'>

            <div className={`AboutMainBannerCont ${isVisible ? 'zoom-in-animation' : ''}`}>

                <div className='AboutMainBannerHeadText'>About Us</div>

                <div className='AboutMainBannerDescText'>Since 1998, we’ve been providing reliable car spare parts. We focus on high <br />
                    quality and always put our customers first.
                </div>
            </div>
        </div>
    )
}

export default AboutMainBanner