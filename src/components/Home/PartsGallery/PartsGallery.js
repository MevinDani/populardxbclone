import React, { useEffect, useState } from 'react';
import './PartsGallery.css'
import partsData from '../../../data/ProductData'
import { useInView } from 'react-intersection-observer';


const PartsGallery = () => {

    const [filter, setFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(8);
    const [showFilter, setShowFilter] = useState(true);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [selectedPart, setSelectedPart] = useState(null);

    const [isPartsGalleryVisible, setIsPartsGalleryVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const { ref: PartsGalleryRef, inView: PartsGalleryInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: screenWidth < 829 ? 0.2 : 0.5,  // Trigger when 50% of the element is in view
    });


    // Get filtered parts
    const filteredParts = filter === "All"
        ? partsData
        : partsData.filter(part => part.category === filter);

    // Show only the parts up to the visible count
    const visibleParts = filteredParts.slice(0, visibleCount);

    // Handle Load More button click
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 8); // Show 8 more items
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setHoverPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Function to close the popup
    const closePopup = () => {
        setSelectedPart(null);
    };

    useEffect(() => {
        if (PartsGalleryInView) {
            setIsPartsGalleryVisible(true)
        }
    }, [PartsGalleryInView])

    // Update screen width on window resize
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 800px)');

        // Update `showFilter` state based on initial screen width
        setShowFilter(!mediaQuery.matches);

        // Listener for screen size changes
        const handleMediaChange = (e) => {
            setShowFilter(!e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        // Cleanup event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    // console.log('isPartsGalleryVisible', isPartsGalleryVisible)


    return (
        <>
            <div className='PartsGalleryWrap' ref={PartsGalleryRef}>


                <div className='PartsGalleryButtonWrap'>

                    {
                        showFilter &&

                        <div className='PartsGalleryButtonCont'>

                            <div className='PartsGalleryButton' onClick={() => setFilter('All')}>
                                All
                            </div>
                            <div className='PartsGalleryButton' onClick={() => setFilter('Engine & Clutch Parts')}>
                                Engine & Clutch Parts
                            </div>
                            <div className='PartsGalleryButton' onClick={() => setFilter('Steering, Brake & Elec. Parts')}>
                                Steering, Brake & Elec. Parts
                            </div>
                            <div className='PartsGalleryButton' onClick={() => setFilter('Elec. and Suspenison Parts')}>
                                Elec. and Suspension Parts
                            </div>
                            <div className='PartsGalleryButton' onClick={() => setFilter('Other Parts')}>
                                Other Parts
                            </div>

                        </div>
                    }


                    <div className='LoadMoreButtonWrap FilterButton'>
                        <button onClick={() => setShowFilter(!showFilter)} className='LoadMoreButton'>
                            Filter
                        </button>
                    </div>
                </div>

                {/* Parts Grid */}
                <div className={`PartsGridWrap ${isPartsGalleryVisible ? 'animate-slide-up' : ''}`}>

                    <div className='PartsGridCont'>
                        {visibleParts.map((part, index) => (
                            <div key={index} className='PartsGridItem'
                                onMouseMove={handleMouseMove}
                                onClick={() => setSelectedPart(part)}
                            >
                                <img
                                    src={part.image}
                                    alt={part.name}
                                    className='PartsGridImg'
                                />

                                <div
                                    className="hover-circle"
                                    style={{
                                        left: `${hoverPosition.x}px`,
                                        top: `${hoverPosition.y}px`,
                                    }}
                                >
                                    View
                                </div>

                                <div className='PartsDescCont'>
                                    <span className='PartsDescCategory'>{part.category}</span>
                                    <p className='PartsDescName'>{part.name.toUpperCase()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Load More Button */}
                {visibleCount < filteredParts.length && (
                    <div className='LoadMoreButtonWrap'>
                        <button onClick={handleLoadMore} className='LoadMoreButton'>
                            Load More
                        </button>
                    </div>
                )}

            </div>

            {/* Full-screen popup */}
            {selectedPart && (
                <div className={`PartsPopup ${selectedPart ? 'show' : ''}`}>
                    <img src={selectedPart.image} alt={selectedPart.name} />
                    <button className="PartsPopupClose" onClick={closePopup}>
                        &times;
                    </button>
                </div>
            )}
        </>
    )
}

export default PartsGallery