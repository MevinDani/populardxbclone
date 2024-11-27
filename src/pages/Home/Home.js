import React from 'react'
import './Home.css'
import MainBanner from '../../components/Home/MainBanner/MainBanner'
import ProductCategory from '../../components/Home/ProductCategory/ProductCategory'
import LeadingBrands from '../../components/Home/Brands/LeadingBrands'
import YearBanner from '../../components/Home/YearBanner/YearBanner'
import HistoryBanner from '../../components/Home/HistoryBanner/HistoryBanner'
import PartsGallery from '../../components/Home/PartsGallery/PartsGallery'
import HomeCarousel from '../../components/Home/HomeCarousel/HomeCarousel'
import Footer from '../../components/Footer/Footer'

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

            {/* HistoryBanner */}
            <div>
                <HistoryBanner />
            </div>

            {/* PartsGallery */}
            <div>
                <PartsGallery />
            </div>

            {/* HomeCarousel */}
            <div style={{ padding: '10px 0px' }}>
                <HomeCarousel />
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home