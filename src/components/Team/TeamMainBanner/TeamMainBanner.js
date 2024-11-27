import React, { useEffect, useState } from 'react'

const TeamMainBanner = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutMainBannerWrap'>

            <div className={`AboutMainBannerCont ${isVisible ? 'zoom-in-animation' : ''}`}>

                <div className='AboutMainBannerHeadText'>Our Team</div>

                <div className='AboutMainBannerDescText'>
                    Meet the people who make Popular Auto Spare Parts great. Our team is skilled, <br />
                    friendly, and ready to help you with anything you need.
                </div>
            </div>
        </div>
    )
}


export default TeamMainBanner