import React from 'react'
import './Home.css'
import MainBanner from '../../components/Home/MainBanner/MainBanner'

const Home = () => {
    return (
        <div className='HomePageWrap'>

            <div className='HomeBannerWrap'>
                <MainBanner />
            </div>
        </div>
    )
}

export default Home