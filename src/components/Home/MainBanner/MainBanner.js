import React, { useEffect, useState } from 'react'
import './MainBanner.css'
import { GoTrophy } from "react-icons/go";
import { PiListChecks } from "react-icons/pi";
import { LuLaugh } from "react-icons/lu";
import { TbPentagonNumber1 } from "react-icons/tb";
// import BannerVideo from '../../../../public/videos/bannerVideo.mp4'

const MainBanner = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <div className='MainBannerWrap'>

            <div className={`MainBannerLeftCont  ${isVisible ? 'animate-slide-up' : ''}`}>

                <div className='MainBannerSmallText'>Popular Auto Spare Parts L.L.C</div>

                <div className='MainBannerBigText'>
                    Your Reliable Partner for <br />
                    High-Quality Spare Parts
                </div>

                <div className='MainBannerBadgeWrap'>
                    <div className='MainBannerBadgeCont'>
                        <GoTrophy />
                        <div>Trusted Since 1998</div>
                    </div>
                    <div className='MainBannerBadgeCont'>
                        <PiListChecks />
                        <div>Quality Guaranteed</div>
                    </div>
                    <div className='MainBannerBadgeCont'>
                        <LuLaugh />
                        <div>Served 2500+ Customers</div>
                    </div>
                    <div className='MainBannerBadgeCont'>
                        <TbPentagonNumber1 />
                        <div>Offering 300+ Products</div>
                    </div>
                </div>

            </div>

            <div class="MainBannerRightCont">

                <div style={{ borderRadius: '12px' }}>
                    <video
                        width="550"
                        height="450"
                        preload="auto"
                        loop=""
                        autoPlay=""
                        muted=""
                        playsinline=""
                        style={{ visibility: 'visible', borderRadius: 12 }}
                    >
                        {/* <source src="https://populardxb.com/wp-content/uploads/2024/10/Popular-1.mp4" type="video/mp4" /> */}
                        <source src='/videos/bannerVideo.mp4' type="video/mp4" />
                    </video>
                </div>

            </div>
        </div>
    )
}

export default MainBanner