import React, { useState } from 'react'
import './NavBar.css'
import NavBarLogo from '../../images/FaithLogo.jpg'
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

                    <div className={`NavLinks  ${location.pathname === "/" ? "active" : ""}`} onClick={() => navigate('/')}>Home</div>
                    <div className={`NavLinks  ${location.pathname === "/about" ? "active" : ""}`} onClick={() => navigate('/about')}>About</div>
                    <div className={`NavLinks  ${location.pathname === "/products" ? "active" : ""}`} onClick={() => navigate('/products')}>Products</div>
                    <div className={`NavLinks  ${location.pathname === "/team" ? "active" : ""}`} onClick={() => navigate('/team')}>Our Team</div>
                    <div className={`NavLinks  ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => navigate('/contact')}>Contact</div>
                    {/* <div>Home</div> */}
                </div>

                {/* mobNavLinkCont */}

                <div className='NavBarMobLinkCont'>

                    {/* <div className={`NavLinks  ${location.pathname === "/contact" ? "active" : ""}`}
                        onClick={() => navigate('/contact')}>
                        Contact
                    </div> */}

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
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/products')
                            setShowNavMenu(false)
                        }}>
                            Products
                        </div>
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/team')
                            setShowNavMenu(false)
                        }}>
                            Our Team
                        </div>
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/contact')
                            setShowNavMenu(false)
                        }}>
                            Contacts
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default NavBar