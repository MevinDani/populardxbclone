import React, { useEffect, useState } from 'react'

const ContactMainBanner = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutMainBannerWrap'>

            <div className={`AboutMainBannerCont ${isVisible ? 'zoom-in-animation' : ''}`}>

                <div className='AboutMainBannerHeadText'>Contact Us</div>

                <div className='AboutMainBannerDescText'>
                    Get in touch with us for your spare parts needs. We have several locations in <br />
                    Dubai and are always here to help.
                </div>
            </div>
        </div>
    )
}


export default ContactMainBanner