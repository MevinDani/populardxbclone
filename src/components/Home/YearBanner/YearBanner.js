import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import './YearBanner.css'
import Gif1 from '../../../images/YearBanner1.gif'
import Gif2 from '../../../images/YearBanner22.gif'
import Gif3 from '../../../images/YearBanner3.gif'
// import YearBannerLeft from '../../../images/yearBannerLeft.png'
import YearBannerLeft from '../../../images/HomeYearImg.jpeg'

const YearBanner = () => {

    const [isYearBannerVisible, setIsYearBannerVisible] = useState(false);

    const { ref: YearBannerRef, inView: YearBannerInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (YearBannerInView) {
            setIsYearBannerVisible(true)
        }
    }, [YearBannerInView])

    return (
        <div className='YearBannerWrap' ref={YearBannerRef}>

            <div className={`YearBannerLeftWrap ${isYearBannerVisible ? 'animate-from-left' : ''}`}>

                <img className='YearBannerLeftImg' src={YearBannerLeft} alt="" />
                {/* <div className='YearBannerLeftCont'>

                    <img className='YearBannerLeftImg' src={YearBannerLeft} alt="" />
                </div> */}
            </div>

            <div className={`YearBannerRightWrap ${isYearBannerVisible ? 'animate-from-right' : ''}`}>

                <div className='YearBannerRightHeadText'>
                    Over 25 Years of Excellence in the Automotive Industry
                </div>

                <div className='YearBannerRightMidText'>
                    Welcome to Honour Auto Spare Parts, a distinguished name in <br />
                    Dubai’s automotive spare parts sector. For over two decades, we have <br />
                    delivered exceptional quality and reliability, earning trust globally for <br />
                    our extensive range of spare parts and dedicated customer service.
                </div>

                <div className='YearBannerGifCont'>

                    <div className='YearBannerGifItem'>
                        <img className='YearBannerGif' src={Gif1} alt="" />
                        <div className='YearBannerGifText'>
                            25 Years Service <br /> Excellence
                        </div>
                    </div>

                    <div className='YearBannerGifItem'>
                        <img className='YearBannerGif' src={Gif3} alt="" />
                        <div className='YearBannerGifText'>Exceptional <br /> Customer <br /> Service</div>
                    </div>

                    <div className='YearBannerGifItem'>
                        <img className='YearBannerGif' src={Gif2} alt="" />
                        <div className='YearBannerGifText'>Fast & Reliable <br /> Delivery</div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default YearBanner