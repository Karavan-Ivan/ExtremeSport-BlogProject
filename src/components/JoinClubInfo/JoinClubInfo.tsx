import JoinClubInfoBloks from 'components/JoinClubInfoBloks/JoinClubInfoBloks'
import './JoinClubInfo.scss'
import { Link } from 'react-router-dom'

type Props = {}

const JoinClubInfo = (props: Props) => {
    return (
        <>
            <div className="JoinClubInfo">
                <h1>
                    Extreme Sports Will Test Your Limits And Push The Boundaries
                    To The Max
                </h1>
                <h3>Be Prepared To Experience The New Adventures</h3>
                <button className="button">
                    <Link to="/Contact" className="activeNavButton">
                        Join Our Club
                    </Link>
                </button>
            </div>
            <JoinClubInfoBloks />
        </>
    )
}

export default JoinClubInfo
