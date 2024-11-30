import React, { useEffect, useState } from 'react'
import './ExtensiveRange.css'
import { IoDiamondOutline } from "react-icons/io5";
import RightImg from '../../../images/AboutExpRightImg.webp'
import { useInView } from 'react-intersection-observer';


const ExtensiveRange = () => {

    const [isExtensiveRangeVisible, setIsExtensiveRangeVisible] = useState(false);

    const { ref: ExtensiveRangeRef, inView: ExtensiveRangeInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (ExtensiveRangeInView) {
            setIsExtensiveRangeVisible(true)
        }
    }, [ExtensiveRangeInView])

    return (
        <div className='ExtensiveRangeWrap' ref={ExtensiveRangeRef}>

            <div className={`ExtensiveRangeCont ${isExtensiveRangeVisible ? 'animate-slide-up' : ''}`}>

                <div className='ExtRangeLeftCont'>


                    <IoDiamondOutline className='ExtRangeDiamond' />


                    <div className='ExtRangeLeftHeadText'>Extensive Product Range</div>

                    <div className='ExtRangeLeftDescText'>
                        At Honuor Auto Spare Parts, we are guided by a set of <br />
                        core values that define our culture and drive our <br />
                        actions. These values form the foundation of our <br />
                        operations & are instrumental in building lasting <br />
                        relationships with our clients.
                    </div>

                    <div className='ExtRangeLeftQualityCont'>
                        <div className='ExtRangeLeftQItem'>INTEGRITY</div>
                        <div className='ExtRangeLeftQItem'>PROFESSIONALISM</div>
                        <div className='ExtRangeLeftQItem'>TRANSPARENCY</div>
                    </div>
                </div>

                <div className='ExtRangeRightCont'>
                    <img className='ExtRangeRightImg' src={RightImg} alt="" />

                </div>
            </div>

        </div>
    )
}

export default ExtensiveRange