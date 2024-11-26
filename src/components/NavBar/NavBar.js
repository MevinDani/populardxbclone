import React, { useState } from 'react'
import './NavBar.css'
import NavBarLogo from '../../images/popularNavLogo.webp'
import { useLocation, useNavigate } from 'react-router-dom'
import { VscListFlat } from "react-icons/vsc";
import { IoMdClose } from 'react-icons/io';


const NavBar = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const [showNavMenu, setShowNavMenu] = useState(false)


    return (
        <>
            <div className='NavBarWrap'>

                <div className='NavBarLogoCont'>
                    <img src={NavBarLogo} className='NavBarLogoImg' alt="" />
                </div>

                <div className='NavBarLinkCont'>

                    <div className={`NavLinks  ${location.pathname === "/" ? "active" : ""}`}>Home</div>
                    <div className={`NavLinks  ${location.pathname === "/about" ? "active" : ""}`}>About</div>
                    <div className={`NavLinks  ${location.pathname === "/products" ? "active" : ""}`}>Products</div>
                    <div className={`NavLinks  ${location.pathname === "/team" ? "active" : ""}`}>Our Team</div>
                    <div className={`NavLinks  ${location.pathname === "/contact" ? "active" : ""}`}>Contact</div>
                    {/* <div>Home</div> */}
                </div>

                {/* mobNavLinkCont */}

                <div className='NavBarMobLinkCont'>

                    <div className={`NavLinks  ${location.pathname === "/contact" ? "active" : ""}`}>Contact</div>

                    <div onClick={() => setShowNavMenu(!showNavMenu)}>
                        <VscListFlat />
                    </div>
                </div>
            </div>


            {/* navMenu */}

            {

                showNavMenu &&

                <div className='NavBarMenu'>

                    <div className='NavBarMenuCloseCont'>
                        <div onClick={() => setShowNavMenu(false)}>
                            <IoMdClose fontSize={40} color='red' />
                        </div>
                    </div>

                    <div className='NavBarMenuItemsCont'>
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/')
                            setShowNavMenu(false)
                        }}>Home</div>

                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/about')
                            setShowNavMenu(false)
                        }}>
                            About
                        </div>
                        <div className='NavBarMenuItems'>Products</div>
                        <div className='NavBarMenuItems'>Our Team</div>
                    </div>

                </div>
            }
        </>
    )
}

export default NavBar