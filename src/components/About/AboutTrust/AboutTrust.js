import React, { useEffect, useState } from 'react'
import './AboutTrust.css'
import Gif1 from '../../../images/YearBanner1.gif'
import Gif2 from '../../../images/YearBanner22.gif'
import Gif3 from '../../../images/YearBanner3.gif'


const AboutTrust = () => {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutTrustWrap'>

            <div className={`AboutTrustLeftCont ${isVisible ? 'animate-from-left' : ''}`}>
            </div>

            <div className={`AboutTrustRightCont ${isVisible ? 'animate-from-right' : ''}`}>

                <div className='YearBannerRightHeadText'>
                    Your Trusted Partner in Spare Parts <br />
                    for Over 25 Years
                </div>

                <div className='YearBannerRightMidText'>
                    Founded on May 1st, 1998, in the bustling heart of Nasser Square, <br />
                    Dubai, Honuor Auto Spare Parts has become a global leader in <br />
                    supplying high-quality spare parts. Over the decades, we’ve built <br />
                    a reputation for excellence, driven by the passion and expertise <br />
                    of Mr. Mohammed Haneefa, Mr. Syed Abdullah, and Mr. Haris <br />
                    Zainuddin.
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

export default AboutTrust