import React, { useEffect, useState } from 'react'
import './ContactBranch.css'
import { BsArrowReturnRight } from "react-icons/bs";
import TelePhoneImg from '../../../images/TelephoneImg.png'
import MailImg from '../../../images/MailImg.png'
import { useInView } from 'react-intersection-observer';


const ContactBranch = () => {

    const [isBranchVisible, setIsBranchVisible] = useState(false);


    const { ref: BranchRef, inView: BranchInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    const handleMapLink1Click = () => {
        window.open(
            'https://www.google.com/maps/place/Honour+Auto+Spare+Parts+Trading+Llc/@25.2711599,55.3108874,15z/data=!4m6!3m5!1s0x3e5f43fdd35810ab:0x1fc81395db33dd4d!8m2!3d25.2711599!4d55.3108874!16s%2Fg%2F11tncp816r?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

    const handleMapLink2Click = () => {
        window.open(
            'https://www.google.com/maps/place/Honour+Auto+Spare+Parts+Trading+Llc/@25.2711599,55.3108874,15z/data=!4m6!3m5!1s0x3e5f43fdd35810ab:0x1fc81395db33dd4d!8m2!3d25.2711599!4d55.3108874!16s%2Fg%2F11tncp816r?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

    useEffect(() => {
        if (BranchInView) {
            setIsBranchVisible(true)
        }
    }, [BranchInView])

    return (
        <div className='ContactBranchWrap' ref={BranchRef}>

            <div className={`HeadOfficeLeftCont ContactBranchLeftCot ${isBranchVisible ? 'animate-from-left' : ""}`}>

                <div className='HeadOfficeHeadText'>Branch 01</div>

                <div className='HeadOfficeAddressCont'>
                    <span className='HeadOfficeCompanyText'>Honour Auto Spare Parts Trading L.L.C</span> <br />
                    <p className='HeadOfficeAddressText'>
                        Shop No 10, Silver Front Building,
                    </p>
                    <p className='HeadOfficeAddressText'>
                        Baniyas Square, Deira, Dubai United Arab Emirates
                    </p>
                </div>

                <div className='HeadOfficeMapLink' onClick={handleMapLink1Click}>
                    Locate on Google Maps
                    <BsArrowReturnRight />
                </div>

                <div className='HeadOfficeAddressText ConnectDataCont'>
                    <img className='HeadOfficeLeftImg' src={TelePhoneImg} alt="" />
                    +971 4 250 3350
                </div>

                <div className='HeadOfficeAddressText ConnectDataCont'>
                    <img className='HeadOfficeLeftImg' src={MailImg} alt="" />
                    br1@populardxb.com
                </div>

            </div>

            <div className={`HeadOfficeLeftCont ContactBranchLeftCot ${isBranchVisible ? 'animate-from-right' : ""}`}>

                <div className='HeadOfficeHeadText'>Branch 02</div>

                <div className='HeadOfficeAddressCont'>
                    <span className='HeadOfficeCompanyText'>Honour Auto Spare Parts Trading L.L.C</span> <br />
                    <p className='HeadOfficeAddressText'>
                        Shop No 6, Near Evin Hotel,
                    </p>
                    <p className='HeadOfficeAddressText'>
                        Baniyas Square, Deira, Dubai United Arab Emirates
                    </p>
                </div>

                <div className='HeadOfficeMapLink' onClick={handleMapLink2Click}>
                    Locate on Google Maps
                    <BsArrowReturnRight />
                </div>

                <div className='HeadOfficeAddressText ConnectDataCont'>
                    <img className='HeadOfficeLeftImg' src={TelePhoneImg} alt="" />
                    +971 4 238 5781
                </div>

                <div className='HeadOfficeAddressText ConnectDataCont'>
                    <img className='HeadOfficeLeftImg' src={MailImg} alt="" />
                    br1@populardxb.com
                </div>

            </div>
        </div>
    )
}

export default ContactBranch