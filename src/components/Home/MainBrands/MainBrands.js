import React from 'react'
import './MainBrands.css'
import { FaStar } from "react-icons/fa";


const MainBrands = () => {
    return (
        <div className='MainBrandsWrap'>

            <div className='MainBrandsCont'>

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
        </div>
    )
}

export default MainBrands