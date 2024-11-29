import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import './AboutEnhance.css'

const AboutEnhance = () => {

    const [isHistoryBannerVisible, setIsHistoryBannerVisible] = useState(false);

    const { ref: HistoryBannerRef, inView: HistoryBannerInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (HistoryBannerInView) {
            setIsHistoryBannerVisible(true)
        }
    }, [HistoryBannerInView])

    return (
        <div className='AboutEnhanceWrap' ref={HistoryBannerRef}>

            <div className={`HistoryBannerLeftWrap ${isHistoryBannerVisible ? 'animate-slide-up' : ''}`}>

                <div className='HistoryBannerLeftCont AboutEnhanceLeft'>
                    Enhance your vehicle <br />
                    performance with trusted <br />
                    high-quality spare parts.
                </div>
            </div>

            <div className={`HistoryBannerRightWrap  ${isHistoryBannerVisible ? 'animate-slide-up' : ''}`}>

                <div className='HistoryBannerRightCont AboutEnhanceRightText'>
                    With an extensive range of products, we strive to <br />
                    meet the varying needs of our valued customers. <br />
                    Our stock stores are housed in large warehouses, <br />
                    ensuring a vast inventory that enables us to <br />
                    promptly fulfill orders and deliver exceptional service. <br />
                    Experience the difference that our technical prowess, <br />
                    vast product range, and efficient warehousing can make <br />
                    as we continue our fast-paced growth, expanding our <br />
                    horizons and reaching new heights.
                </div>
            </div>

        </div>
    )
}

export default AboutEnhance