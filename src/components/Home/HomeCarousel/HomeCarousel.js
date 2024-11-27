import React from 'react'
import './HomeCarousel.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const itemsData = [
    { id: 1, imgSrc: require('../../../images/Fuel-Pump-png.webp'), altText: 'Fuel Pump' },
    { id: 2, imgSrc: require('../../../images/Free-Wheel-Hub-png.webp'), altText: 'Fuel Pump' },
    { id: 3, imgSrc: require('../../../images/Fitwell-Drive-Shaft-png.webp'), altText: 'Fuel Pump' },
    { id: 4, imgSrc: require('../../../images/Clutch-Cover-AE-1-png.webp'), altText: 'Fuel Pump' },
    { id: 5, imgSrc: require('../../../images/Clutch-Disc-AE-1-png.webp'), altText: 'Fuel Pump' },
    { id: 6, imgSrc: require('../../../images/Brake-Shoe-Fitwell-1-png.webp'), altText: 'Fuel Pump' },
    { id: 7, imgSrc: require('../../../images/Brake-Pad-Fitwell-1-png.webp'), altText: 'Fuel Pump' },
    { id: 8, imgSrc: require('../../../images/Brake-Caliper-png.webp'), altText: 'Fuel Pump' },
    { id: 9, imgSrc: require('../../../images/Belt-Tensioner-png.webp'), altText: 'Fuel Pump' },
    // Add more items as needed
];


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};




const HomeCarousel = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}           /* Enable autoplay */
            autoPlaySpeed={1000}      /* Set autoplay speed (2 seconds) */
            transitionDuration={100}
            itemClass="carousel-item-spacing"  /* Class for spacing between items */
            arrows={false}
        >
            {itemsData.map(item => (
                <div className='CarouselCard' key={item.id}>
                    <img className='HomeCarouselImg' src={item.imgSrc} alt={item.altText} />
                </div>
            ))}


        </Carousel>
    )
}


export default HomeCarousel