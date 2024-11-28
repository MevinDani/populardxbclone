import React, { useEffect, useState } from 'react'
import './HeadOffice.css'
import { BsArrowReturnRight } from "react-icons/bs";
import img from '../../../images/HeadOfficeImg.webp'
import TelePhoneImg from '../../../images/TelephoneImg.png'
import MailImg from '../../../images/MailImg.png'
import WebImg from '../../../images/WebImg.png'

const HeadOffice = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleMapLinkClick = () => {
        window.open(
            'https://www.google.com/maps/place/Popular+Auto+Spare+Parts+Trading+LLC/@25.270271,55.310121,19z/data=!3m1!4b1!4m6!3m5!1s0x3e5f434a3638c763:0x2001a76605f4acab!8m2!3d25.270271!4d55.310121!16s%2Fg%2F11bbwp41l4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
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
                        <span className='HeadOfficeCompanyText'>Popular Auto Spart Parts Trading L.L.C</span> <br />
                        <p className='HeadOfficeAddressText'>
                            Near Mark Inn Hotel, Baniyas Square, Deira, Dubai
                        </p>
                        <p className='HeadOfficeAddressText'>
                            United Arab Emirates | P.O Box 41351
                        </p>
                    </div>

                    <div className='HeadOfficeMapLink' onClick={handleMapLinkClick}>
                        Locate on Google Maps
                        <BsArrowReturnRight />
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={TelePhoneImg} alt="" />
                        +971 4 221 6100
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={TelePhoneImg} alt="" />
                        +971 4 221 2606
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={MailImg} alt="" />
                        info@populardxb.com
                    </div>

                    <div className='HeadOfficeAddressText ConnectDataCont'>
                        <img className='HeadOfficeLeftImg' src={WebImg} alt="" />
                        www.populardxb.com
                    </div>
                </div>

                <div className='HeadOfficeRightCont'>
                    <img className='HeadOfficeRightImg' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeadOffice