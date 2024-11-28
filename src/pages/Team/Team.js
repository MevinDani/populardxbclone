import React from 'react'
import TeamMainBanner from '../../components/Team/TeamMainBanner/TeamMainBanner'
import Footer from '../../components/Footer/Footer'
import TeamCard from '../../components/Team/TeamCard/TeamCard'

const Team = () => {
    return (
        <div className='HomePageWrap'>

            {/* teamMainBanner */}
            <div>
                <TeamMainBanner />
            </div>

            {/* TeamCard */}
            <div>
                <TeamCard />
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Team