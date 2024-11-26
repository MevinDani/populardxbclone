import React from 'react'
import './Home.css'
import MainBanner from '../../components/Home/MainBanner/MainBanner'
import ProductCategory from '../../components/Home/ProductCategory/ProductCategory'
import LeadingBrands from '../../components/Home/Brands/LeadingBrands'

const Home = () => {
    return (
        <div className='HomePageWrap'>

            {/* MainBanner */}
            <div className='HomeBannerWrap'>
                <MainBanner />
            </div>

            {/* ProductCategory */}
            <div>
                <ProductCategory />
            </div>

            {/* Leading Brands */}
            <div>
                <LeadingBrands />
            </div>
        </div>
    )
}

export default Home