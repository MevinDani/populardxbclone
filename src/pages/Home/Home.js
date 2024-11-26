import React from 'react'
import './Home.css'
import MainBanner from '../../components/Home/MainBanner/MainBanner'
import ProductCategory from '../../components/Home/ProductCategory/ProductCategory'
import LeadingBrands from '../../components/Home/Brands/LeadingBrands'
import YearBanner from '../../components/Home/YearBanner/YearBanner'

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

            {/* YearBanner */}
            <div>
                <YearBanner />
            </div>

        </div>
    )
}

export default Home