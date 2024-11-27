import React from 'react';
import AboutMainBanner from '../../components/About/AboutMainBanner/AboutMainBanner'
import AboutTrust from '../../components/About/AboutTrust/AboutTrust'
import AboutEnhance from '../../components/About/AboutEnhance/AboutEnhance'
import ExtensiveRange from '../../components/About/AboutExtensiveRange/ExtensiveRange';
import Mission from '../../components/About/AboutMission/Mission';
import Vision from '../../components/About/AboutVision/Vision';
import Footer from '../../components/Footer/Footer';

const About = () => {

    return (
        <div className='HomePageWrap'>

            {/* AboutMainBanner */}
            <AboutMainBanner />

            {/* AboutTrust */}
            <AboutTrust />

            {/* AboutEnhance */}
            <AboutEnhance />

            {/* AboutExtRange */}
            <ExtensiveRange />

            {/* OurMission */}
            <Mission />

            {/* OurVision */}
            <Vision />

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default About