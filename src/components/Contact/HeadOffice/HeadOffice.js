import React, { useEffect, useState } from 'react'
import './HeadOffice.css'
import { BsArrowReturnRight } from "react-icons/bs";
import img from '../../../images/FaithContactImg.jpeg'
import TelePhoneImg from '../../../images/TelephoneImg.png'
import MailImg from '../../../images/MailImg.png'
import WebImg from '../../../images/WebImg.png'

const HeadOffice = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleMapLinkClick = () => {
        window.open(
            'https://www.google.com/maps/place/Honour+Auto+Spare+Parts+Trading+Llc/@25.2711599,55.3108874,15z/data=!4m6!3m5!1s0x3e5f43fdd35810ab:0x1fc81395db33dd4d!8m2!3d25.2711599!4d55.3108874!16s%2Fg%2F11tncp816r?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`HeadOfficeWrap ${isVisible ? 'animate-slide-up' : ''}`}>

            <div className='HeadOfficeCont'>

                <div className='HeadOfficeLeftCont'>

                    <div className='HeadOfficeHeadText'>Head Office</div>

                    <div className='HeadOfficeAddressCont'>
                        <span className='HeadOfficeCompanyText'>Honour Auto Spare Parts Trading L.L.C</span> <br />

                        <p className='HeadOfficeAddressText'>
                            Shop No:5, Rimal NAF 365 Building, <br />
                            Behind Deira Park Hotel, <br />
                            Deira, Dubai United Arab Emirates
                        </p>

                        {/* <p className='HeadOfficeAddressText'>
                            United Arab Emirates | P.O Box 41351
                        </p> */}
                    </div>

                    <div className='HeadOfficeMapLink' onClick={handleMapLinkClick}>
                        Locate on Google Maps
                        <BsArrowReturnRight />
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={TelePhoneImg} alt="" />
                        +971 55 860 6530
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={TelePhoneImg} alt="" />
                        +971 54 385 3535
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={MailImg} alt="" />
                        honour22@eim.ae
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={MailImg} alt="" />
                        fanseerpanchu@gmail.com
                    </div>

                    {/* <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={WebImg} alt="" />
                        www.populardxb.com
                    </div> */}
                </div>

                <div className='HeadOfficeRightCont'>
                    <img className='HeadOfficeRightImg' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeadOffice