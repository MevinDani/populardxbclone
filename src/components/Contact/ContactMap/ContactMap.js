import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './ContactMap.css'
import locationImg from '../../../images/locationImg.png'
import { useInView } from 'react-intersection-observer';


// Define a custom marker icon if needed
const customIcon = new L.Icon({
    iconUrl: locationImg,
    iconSize: [40, 60], // Replace with your icon URL
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const ContactMap = () => {

    const [isMapVisible, setIsMapVisible] = useState(false);

    const { ref: MapRef, inView: MapInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.4,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (MapInView) {
            setIsMapVisible(true)
        }
    }, [MapInView])

    // Coordinates for the location (latitude, longitude)
    const position = [25.270271, 55.310121];

    return (
        <div className='ContactMapWrap' ref={MapRef}>

            <div className={`ContactMapCont ${isMapVisible ? 'animate-slide-up' : ''}`}>
                <MapContainer
                    center={position}
                    zoom={50}
                    style={{ height: '100%', width: '100%' }}
                >
                    {/* TileLayer: Adds the OpenStreetMap tiles */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Marker: Add a pin on the map */}
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            Popular Auto Spare Parts Trading LLC <br /> Dubai, UAE
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};


export default ContactMap