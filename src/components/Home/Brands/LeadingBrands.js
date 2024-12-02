import React, { useEffect, useState } from 'react'
import './LeadingBrands.css'
import { useInView } from 'react-intersection-observer';
import { FaStar } from "react-icons/fa";



const LeadingBrands = () => {

    const [isLeadBrandVisible, setIsLeadBrandVisible] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const { ref: LeadBrandRef, inView: LeadBrandInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: screenWidth < 410 ? 0.2 : 0.5,   // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (LeadBrandInView) {
            setIsLeadBrandVisible(true)
        }
    }, [LeadBrandInView])

    // Update screen width on window resize
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='LeadingBrandsWrap' ref={LeadBrandRef}>

            <div className='LeadingBrandsHeaderText'>Leading Brands</div>

            <div className={`LeadingBrandsCont ${isLeadBrandVisible ? 'animate-from-left' : ''}`}>

                <div className='LeadingMainBrands'>
                    <div className='LeadingBrandMain logo13'>

                        <div className='top-left-icon'>
                            <FaStar />
                        </div>
                    </div>
                    <div className='LeadingBrandMain logo14'>
                        <div className='top-left-icon'>
                            <FaStar />
                        </div>
                    </div>
                    <div className='LeadingBrandMain logo15'>
                        <div className='top-left-icon'>
                            <FaStar />
                        </div>
                    </div>
                </div>

                <div className='LeadingBrandItemCont'>

                    <div className='LeadingBrand logo1'>

                    </div>
                    <div className='LeadingBrand logo2'>

                    </div>
                    <div className='LeadingBrand logo3'>

                    </div>
                    <div className='LeadingBrand logo4'>

                    </div>
                    <div className='LeadingBrand logo5'>

                    </div>
                    <div className='LeadingBrand logo6'>

                    </div>
                    <div className='LeadingBrand logo7'>

                    </div>
                    <div className='LeadingBrand logo8'>

                    </div>
                    <div className='LeadingBrand logo9'>

                    </div>
                    <div className='LeadingBrand logo10'>

                    </div>
                    {/* <div className='LeadingBrand logo11'>

                    </div> */}
                    <div className='LeadingBrand logo12'>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LeadingBrands