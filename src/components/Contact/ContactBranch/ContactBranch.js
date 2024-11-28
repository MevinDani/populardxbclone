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
            'https://www.google.com/maps/place/Popular+Auto+Spare+Parts+Trading+L.L.C-Branch+1/@25.2703368,55.2702172,14z/data=!4m6!3m5!1s0x3e5f43663767e067:0xedd2c83e93dfc36e!8m2!3d25.2706614!4d55.3093526!16s%2Fg%2F11v3nq4jt7?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

    const handleMapLink2Click = () => {
        window.open(
            'https://www.google.com/maps/place/POPULAR+AUTO+SPARE+PARTS+BRANCH-2/@25.2704401,55.3082351,14z/data=!4m7!3m6!1s0x3e5f434676b6f891:0x46fd216f5c4eb1!8m2!3d25.2701066!4d55.3052917!15sChhwb3B1bGFyIGF1dG8gc3BhcmUgcGFydHOSARBhdXRvX3BhcnRzX3N0b3Jl4AEA!16s%2Fg%2F11lv8xlsn1?entry=tts&g_ep=EgoyMDI0MTAxNi4wIPu8ASoASAFQAw%3D%3D',
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
                    <span className='HeadOfficeCompanyText'>Popular Auto Spart Parts Trading L.L.C</span> <br />
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
                    <span className='HeadOfficeCompanyText'>Popular Auto Spart Parts Trading L.L.C</span> <br />
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