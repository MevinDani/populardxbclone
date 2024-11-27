import React, { useEffect, useState } from 'react'

const ProductMainBanner = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='AboutMainBannerWrap'>

            <div className={`AboutMainBannerCont ${isVisible ? 'zoom-in-animation' : ''}`}>

                <div className='AboutMainBannerHeadText'>Our Products</div>

                <div className='AboutMainBannerDescText'>Check out our wide selection of car spare parts. From engines to brakes, <br />
                    we offer high-quality parts to keep your vehicle running smoothly.
                </div>
            </div>
        </div>
    )
}

export default ProductMainBanner