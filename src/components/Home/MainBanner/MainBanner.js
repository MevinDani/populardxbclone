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
        <>
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

                {/* <div class="MainBannerRightCont">

                    <div style={{ borderRadius: '12px' }}>
                        <video
                            width="550"
                            height="450"
                            preload="auto"
                            loop
                            autoPlay
                            muted
                            playsInline
                            style={{ visibility: 'visible', borderRadius: 12 }}
                        >
                            <source src='/videos/bannerVideo.mp4' type="video/mp4" />
                        </video>
                    </div>

                </div> */}


                <div
                    className="nectar-shape-divider-wrap"
                    style={{ height: '50px' }}
                    data-height="50"
                    data-front=""
                    data-style="tilt"
                    data-position="bottom"
                >
                    <svg
                        className="nectar-shape-divider"
                        aria-hidden="true"
                        fill="#0077b6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <polygon points="104 10 0 0 0 10"></polygon>
                    </svg>
                </div>
            </div>



        </>
    )
}

export default MainBanner