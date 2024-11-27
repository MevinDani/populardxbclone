import React, { useEffect, useState } from 'react'
import './Vision.css'
import { useInView } from 'react-intersection-observer';


const Vision = () => {


    const [isVisionVisible, setIsVisionVisible] = useState(false);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 460);

    const { ref: VisionRef, inView: VisionInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const textWithBreaks = (
        <>
            To become the preferred choice and a global leader in the <br />
            automotive spare parts industry. We strive to be recognized <br />
            for our exceptional quality, unmatched customer service, <br />
            and innovative solutions. By continuously embracing new <br />
            technologies and staying ahead of market trends, we aim to <br />
            set the benchmark for excellence and exceed the <br />
            expectations of our valued customers worldwide.
        </>
    );

    const textWithoutBreaks =
        'To become the preferred choice and a global leader in the automotive spare parts industry. We strive to be recognized for our exceptional quality, unmatched customer service, and innovative solutions. By continuously embracing new technologies and staying ahead of market trends, we aim to set the benchmark for excellence and exceed the expectations of our valued customers worldwide.';



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
        if (VisionInView) {
            setIsVisionVisible(true)
        }
    }, [VisionInView])

    return (
        <div className='VisionWrap' ref={VisionRef}>

            <div className={`VisionRightCont ${isVisionVisible ? 'animate-from-left' : ''}`}>

                <div className='VisionRightHeadText'>
                    Our Vision
                </div>

                <div className='VisionRightMidText'>
                    {isSmallScreen ? textWithoutBreaks : textWithBreaks}
                </div>

            </div>

            <div className={`VisionLeftCont  ${isVisionVisible ? 'animate-from-right' : ''}`}>
            </div>
        </div>
    )
}

export default Vision