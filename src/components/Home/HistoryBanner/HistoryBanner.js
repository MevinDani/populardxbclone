import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import './HistoryBanner.css'

const HistoryBanner = () => {

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
        <div className='HistoryBannerWrap' ref={HistoryBannerRef}>

            <div className={`HistoryBannerLeftWrap ${isHistoryBannerVisible ? 'animate-slide-up' : ''}`}>

                <div className='HistoryBannerLeftCont'>
                    We offer a wide range of <br />
                    products to meet our <br />
                    customers diverse needs.
                </div>
            </div>

            <div className={`HistoryBannerRightWrap  ${isHistoryBannerVisible ? 'animate-slide-up' : ''}`}>

                <div className='HistoryBannerRightCont'>
                    Our journey of technical expertise began in 1997, <br />
                    and since then, we have emerged as the largest <br />
                    distributor of quality ISO graded products sourced <br />
                    from Asia and Europe in the aftermarket industry. <br />
                    Our commitment to excellence has allowed us to <br />
                    establish several branches under the renowned <br />
                    Popular Group , catering to diverse car models and <br />
                    brands.
                </div>
            </div>

        </div>
    )
}

export default HistoryBanner