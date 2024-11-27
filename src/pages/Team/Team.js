import React from 'react'
import TeamMainBanner from '../../components/Team/TeamMainBanner/TeamMainBanner'
import Footer from '../../components/Footer/Footer'

const Team = () => {
    return (
        <div className='HomePageWrap'>

            {/* teamMainBanner */}
            <div style={{ marginBottom: '32px' }}>
                <TeamMainBanner />
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Team