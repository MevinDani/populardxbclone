import React, { useEffect, useState } from 'react'
import './LeadingBrands.css'
import { useInView } from 'react-intersection-observer';



const LeadingBrands = () => {

    const [isLeadBrandVisible, setIsLeadBrandVisible] = useState(false);


    const { ref: LeadBrandRef, inView: LeadBrandInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (LeadBrandInView) {
            setIsLeadBrandVisible(true)
        }
    }, [LeadBrandInView])

    return (
        <div className='LeadingBrandsWrap' ref={LeadBrandRef}>

            <div className='LeadingBrandsHeaderText'>Leading Brands</div>

            <div className={`LeadingBrandsCont ${isLeadBrandVisible ? 'animate-from-left' : ''}`}>

                <div className='LeadingMainBrands'>
                    <div className='LeadingBrandMain logo13'>

                    </div>
                    <div className='LeadingBrandMain logo14'>

                    </div>
                    <div className='LeadingBrandMain logo15'>

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