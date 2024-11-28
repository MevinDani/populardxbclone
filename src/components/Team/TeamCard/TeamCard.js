import React, { useEffect, useState } from 'react'
import './TeamCard.css'
import TeamCardImg from '../../../images/TeamCardImg.png'
import { BsArrowRight } from "react-icons/bs";

const TeamCard = () => {

    const [isVisible, setIsVisible] = useState(false);

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    const handleTeamCardClick = (item) => {
        setSelectedItem(item);
        setIsPopupVisible(true); // Show the popup
    };

    const closePopup = () => {
        setIsPopupVisible(false); // Hide the popup
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY }); // Track mouse position
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const people = [
        {
            img: TeamCardImg,
            position: "Chairman",
            name: "Mohammed Hannefa",
        },
        {
            img: TeamCardImg,
            position: "Managing Director",
            name: "Haris Zainudheen",
        },
        {
            img: TeamCardImg,
            position: "Managing Director",
            name: "Syed Abdullah",
        },
        {
            img: TeamCardImg,
            position: "General Manager",
            name: "Naseer N.M",
        },
        {
            img: TeamCardImg,
            position: "Chief Operation Officer",
            name: "Shiyas Mohammed",
        },
        // Add more entries as needed
    ];

    return (
        <>
            <div className={`TeamCardWrap ${isVisible ? 'animate-slide-up' : ''}`}>

                {
                    people.map((item, index) => (

                        <div key={index} className='TeamCard' onClick={() => handleTeamCardClick(item)}>

                            <div className='TeamCardImgCont'>
                                <img className='TeamCardImg' src={item.img} alt="" />
                            </div>

                            <div className='TeamCardPositionText'>{item.position}</div>

                            <div className='TeamCardNameText'>{item.name}</div>

                            <BsArrowRight />

                        </div>
                    ))
                }

            </div>

            {/* Popup Screen */}
            {/* Popup Screen */}
            <div className={`PopupScreen ${isPopupVisible ? 'visible' : ''}`}
                onMouseMove={handleMouseMove}
                onClick={closePopup}
            >

                {
                    isPopupVisible &&
                    <div
                        className="PopupCloseCursor"
                        style={{
                            top: `${mousePosition.y}px`,
                            left: `${mousePosition.x}px`,
                        }}
                    >
                        X
                    </div>
                }

                <div className="PopupContentContainer">
                    {/* Left Container */}
                    <div className="PopupLeft">
                        {selectedItem && (
                            <>
                                <img src={selectedItem.img} alt={selectedItem.name} className="PopupImage" />
                                <h2 className="PopupName">{selectedItem.name}</h2>
                                <p className="PopupPosition">{selectedItem.position}</p>
                            </>
                        )}
                    </div>
                    {/* Right Container */}
                    <div className="PopupRight"></div>
                </div>
            </div>
        </>
    )
}

export default TeamCard