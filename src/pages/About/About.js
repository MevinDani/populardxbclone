import React from 'react';
import AboutMainBanner from '../../components/About/AboutMainBanner/AboutMainBanner'
import AboutTrust from '../../components/About/AboutTrust/AboutTrust'
import AboutEnhance from '../../components/About/AboutEnhance/AboutEnhance'
import ExtensiveRange from '../../components/About/AboutExtensiveRange/ExtensiveRange';
import Mission from '../../components/About/AboutMission/Mission';
import Vision from '../../components/About/AboutVision/Vision';
import Footer from '../../components/Footer/Footer';
import SubPagesBanner from '../../components/SubPagesBanner/SubPagesBanner';

const About = () => {

    return (
        <div className='HomePageWrap'>

            {/* AboutMainBanner */}
            {/* <AboutMainBanner /> */}
            <SubPagesBanner main={'About Us'} desc={'Since 1998, we’ve been providing reliable car spare parts. We focus on high quality and always put our customers first.'} />

            {/* AboutTrust */}
            <AboutTrust />

            {/* AboutEnhance */}
            <div style={{ margin: '12px 0px' }}>
                <AboutEnhance />
            </div>
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