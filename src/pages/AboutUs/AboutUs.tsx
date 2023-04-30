import RiskAndRewards from './AboutUsComponents/RiskAndRewards/RiskAndRewards'
import ReasonsToChoose from './AboutUsComponents/ReasonsToChoose/ReasonsToChoose'
import Instructors from './AboutUsComponents/Instructors/Instructors'
import WhatPeopleSaying from './AboutUsComponents/WhatPeopleSaying/WhatPeopleSaying'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <>
            <div className="container AboutUsContainer">
                <RiskAndRewards />
                <ReasonsToChoose />
                <Instructors />
                <WhatPeopleSaying />
            </div>
        </>
    )
}

export default AboutUs
