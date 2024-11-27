import React from 'react'
import ProductMainBanner from '../../components/Products/ProductMainBanner/ProductMainBanner'
import ProductCategory from '../../components/Home/ProductCategory/ProductCategory'
import PartsGallery from '../../components/Home/PartsGallery/PartsGallery'
import LeadingBrands from '../../components/Home/Brands/LeadingBrands'
import Footer from '../../components/Footer/Footer'

const Products = () => {
    let productPage = true
    
    return (
        <div className='HomePageWrap'>

            {/* MainBanner */}
            <div style={{ marginBottom: '32px' }}>
                <ProductMainBanner />
            </div>

            {/* ProductCategory */}
            <div style={{ marginBottom: '32px' }}>
                <ProductCategory page={productPage} />
            </div>

            {/* PartsGallery */}
            <div style={{ marginBottom: '32px' }}>
                <PartsGallery />
            </div>

            {/* Leading Brands */}
            <div style={{ marginBottom: '32px' }}>
                <LeadingBrands />
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>


        </div>
    )
}

export default Products