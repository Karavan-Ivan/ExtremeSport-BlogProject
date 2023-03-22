import ExtremeSportsActivities from 'components/ExtremeSportsActivities/ExtremeSportsActivities'
import JoinClubInfo from 'components/JoinClubInfo/JoinClubInfo'
import JoinClubLogo from 'components/JoinClubLogo/JoinClubLogo'
import JoinUs from 'components/JoinUs/JoinUs'
import Stats from 'components/Stats/Stats'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <div className="firstContainer margin">
                <JoinUs />
                <Stats />
            </div>
            <div className="middleContainer">
                <ExtremeSportsActivities />
                <JoinClubLogo />
            </div>
            <div className="JoinClubInfoContainer margin">
                <JoinClubInfo />
            </div>
        </>
    )
}

export default Main
