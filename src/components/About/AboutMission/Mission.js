import React, { useEffect, useState } from 'react'
import './Mission.css'
import { useInView } from 'react-intersection-observer';


const Mission = () => {


    const [isMissionVisible, setIsMissionVisible] = useState(false);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 460);

    const { ref: MissionRef, inView: MissionInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const textWithBreaks = (
        <>
            We are committed to offering a comprehensive selection of <br />
            parts that consistently meet the highest industry standards, <br />
            guaranteeing optimal performance and durability. With our <br />
            extensive inventory and diverse product range, we are <br />
            dedicated to fulfilling the unique requirements of our <br />
            customers and providing them with a seamless and <br />
            satisfying experience.
        </>
    );

    const textWithoutBreaks =
        'We are committed to offering a comprehensive selection of parts that consistently meet the highest industry standards, guaranteeing optimal performance and durability. With our extensive inventory and diverse product range, we are dedicated to fulfilling the unique requirements of our customers and providing them with a seamless and satisfying experience.';



    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 460);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (MissionInView) {
            setIsMissionVisible(true)
        }
    }, [MissionInView])

    return (
        <div className='MissionWrap' ref={MissionRef}>

            <div className={`MissionLeftCont  ${isMissionVisible ? 'animate-from-left' : ''}`}>
            </div>

            <div className={`MissionRightCont ${isMissionVisible ? 'animate-from-right' : ''}`}>

                <div className='MissionRightHeadText'>
                    Our Mission
                </div>

                <div className='MissionRightMidText'>
                    {isSmallScreen ? textWithoutBreaks : textWithBreaks}
                </div>

                {/* <div className='YearBannerGifCont'>

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

                </div> */}
            </div>
        </div>
    )
}

export default Mission