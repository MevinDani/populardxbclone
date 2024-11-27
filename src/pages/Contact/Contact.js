import React from 'react'
import ContactMainBanner from '../../components/Contact/ContactMainBanner/ContactMainBanner'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div className='HomePageWrap'>

            {/* teamMainBanner */}
            <div style={{ marginBottom: '32px' }}>
                <ContactMainBanner />
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Contact