import ExtremeSportsActivities from 'components/ExtremeSportsActivities/ExtremeSportsActivities'
import JoinClubInfo from 'components/JoinClubInfo/JoinClubInfo'
import JoinClubLogo from 'components/JoinClubLogo/JoinClubLogo'
import JoinUs from 'components/JoinUs/JoinUs'
import LatestNews from 'components/LatestNews/LatestNews'
import Stats from 'components/Stats/Stats'
import WhyChooseUs from 'components/WhyChooseUs/WhyChooseUs'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <div className="firstContainer mainContainer container">
                <JoinUs />
                <Stats />
            </div>
            <div className="middleContainer container">
                <ExtremeSportsActivities />
                <JoinClubLogo />
            </div>
            <div className="JoinClubInfoContainer mainContainer container">
                <JoinClubInfo />
            </div>
            <div className="mainContainer container">
                <WhyChooseUs />
                <LatestNews />
            </div>
        </>
    )
}

export default Main
