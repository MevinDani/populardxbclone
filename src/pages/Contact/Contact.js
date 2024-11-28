import React from 'react'
import ContactMainBanner from '../../components/Contact/ContactMainBanner/ContactMainBanner'
import Footer from '../../components/Footer/Footer'
import HeadOffice from '../../components/Contact/HeadOffice/HeadOffice'
import ContactMap from '../../components/Contact/ContactMap/ContactMap'
import ContactBranch from '../../components/Contact/ContactBranch/ContactBranch'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'

const Contact = () => {
    return (
        <div className='HomePageWrap'>

            {/* teamMainBanner */}
            <div style={{ marginBottom: '32px' }}>
                <ContactMainBanner />
            </div>

            {/* HeadOffice */}
            <div style={{ marginBottom: '32px' }}>
                <HeadOffice />
            </div>

            {/* Map */}
            <div style={{ marginBottom: '32px' }}>
                <ContactMap />
            </div>

            {/* Branches */}
            <div style={{ marginBottom: '32px' }}>
                <ContactBranch />
            </div>

            {/* ContactForm */}
            <div style={{ marginBottom: '32px' }}>
                <ContactForm />
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Contact