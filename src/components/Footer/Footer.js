import React from 'react'
import './Footer.css'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='FooterWrap'>

            <div className='FooterTopCont'>
                <div className='FooterLeftCont'>

                    <div className='FooterContHeadText'>
                        Your premier destination for <br />
                        top-quality Japanese car <br />
                        spare parts.
                    </div>

                    <div className='FooterContDescText'>
                        For over two decades, Honour Auto Spare <br />
                        Parts have delivered exceptional quality and <br />
                        reliability, earning trust globally for our <br />
                        extensive range of spare parts <br />
                        and dedicated customer service.
                    </div>
                </div>

                <div className='FooterRightCont'>

                    <div className='FooterContHeadText'>Head Office</div>

                    <div className='FooterAddressCont'>
                        <CiLocationOn className='FooterAddressIcon' />
                        <div className='FooterContDescText'>
                            Honour Auto Spart Parts Trading L.L.C, <br />
                            Shop No:5, Rimal NAF 365 Building, <br />
                            Behind Deira Park Hotel, <br />
                            Deira, Dubai United Arab Emirates
                        </div>
                    </div>
                    <div className='FooterAddressCont'>
                        <CiMail className='FooterAddressIcon' />
                        <div className='FooterContDescText'>
                            info@populardxb.com
                        </div>
                    </div>
                    <div className='FooterAddressCont'>
                        <FiPhone className='FooterAddressIcon' />
                        <div className='FooterContDescText'>
                            +971 55 860 6530
                        </div>
                    </div>
                </div>
            </div>

            <div className='FooterBottomCont'>

                <div className='FooterContDescText'>
                    All Rights Reserved | Honour Auto Spare Parts 2024
                </div>
            </div>
        </div>
    )
}

export default Footer