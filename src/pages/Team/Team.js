import React from 'react'
import TeamMainBanner from '../../components/Team/TeamMainBanner/TeamMainBanner'
import Footer from '../../components/Footer/Footer'
import TeamCard from '../../components/Team/TeamCard/TeamCard'
import SubPagesBanner from '../../components/SubPagesBanner/SubPagesBanner'

const Team = () => {
    return (
        <div className='HomePageWrap'>

            {/* teamMainBanner */}
            <div>
                {/* <TeamMainBanner /> */}
                <SubPagesBanner main={'Our Team'}
                    desc={' Meet the people who make Honour Auto Spare Parts great. Our team is skilled, friendly, and ready to help you with anything you need.'}
                />
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