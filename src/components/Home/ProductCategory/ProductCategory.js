import React, { useEffect, useState } from 'react'
import './ProductCategory.css'
import { useInView } from 'react-intersection-observer';


const ProductCategory = ({ page }) => {

    const [isProdCatVisible, setIsProdCatVisible] = useState(false);

    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the element
        const y = e.clientY - rect.top;  // Mouse Y relative to the element

        const xPercent = (x / rect.width - 0.5) * 360; // Convert to a percentage
        const yPercent = (y / rect.height - 0.5) * 360;

        setRotation({ x: yPercent, y: -xPercent });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    const handleMouseMoveA = (e, cardRef) => {
        const rect = cardRef.getBoundingClientRect();

        // Calculate the position of the mouse relative to the center of the card
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Calculate rotation angles
        const rotateX = -y / 14; // Adjust sensitivity by changing divisor
        const rotateY = x / 14;

        // Apply 3D transform to the card
        cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    };

    const handleMouseLeaveA = (cardRef) => {
        // Reset the transform when the mouse leaves
        cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };


    const { ref: prodCatRef, inView: prodCatInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.5,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (prodCatInView) {
            setIsProdCatVisible(true)
        }
    }, [prodCatInView])

    // console.log('page', page)


    return (
        <div className='ProductCategoryWrap' ref={prodCatRef}
            style={{
                // backgroundColor: page ? '#f7f7f7' : '#ed1e24',
                backgroundColor: page ? 'white' : '#f7f7f7',
            }}
        >

            <div className='ProductCategoyHeaderText' style={{
                // color: page ? 'black' : 'white',
                color: page ? 'black' : 'black',
            }}>Product Categories</div>

            <div className={`ProductCategoryCont ${isProdCatVisible ? 'animate-slide-up' : ''}`}>

                <div className='ProductCatItem SuspensionPart'
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}

                >
                    <p className='ProductItemText'>
                        Suspension <br />
                        Parts
                    </p>
                </div>

                <div className='ProductCatItem BrakePart'
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}

                >
                    <p className='ProductItemText'> Brake Parts</p>
                </div>

                <div className='ProductCatItem CletchPart'
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}

                >
                    <p className='ProductItemText'> Cletch Parts</p>
                </div>

                <div className='ProductCatItem EnginePart'
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}

                >
                    <p className='ProductItemText'> Engine Parts</p>
                </div>

                <div className='ProductCatItem OtherPart'
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}

                >
                    <p className='ProductItemText'> Other Parts</p>
                </div>

            </div>

        </div>
    )
}

export default ProductCategory