import MountainBiking from './ActivitiesComponents/MountainBiking'
import './Activities.scss'
import SnowSports from './ActivitiesComponents/SnowSports'
import Surfing from './ActivitiesComponents/Surfing'
import Skateboarding from './ActivitiesComponents/Skateboarding'
import JetSkiing from './ActivitiesComponents/JetSkiing'
import IceClimbing from './ActivitiesComponents/IceClimbing'

type Props = {}

const Activities = (props: Props) => {
    return (
        <>
            <div className="Activities mainContainer">
                <div>
                    <h1>Mountain Biking</h1>
                    <hr />
                    <MountainBiking />
                </div>
                <div>
                    <h1>Snow Sports</h1>
                    <hr />
                    <SnowSports />
                </div>
                <div>
                    <h1>Surfing</h1>
                    <hr />
                    <Surfing />
                </div>
                <div>
                    <h1>Skateboarding</h1>
                    <hr />
                    <Skateboarding />
                </div>
                <div>
                    <h1>Jet Skiing</h1>
                    <hr />
                    <JetSkiing />
                </div>
                <div>
                    <h1>Ice Climbing</h1>
                    <hr />
                    <IceClimbing />
                </div>
            </div>
        </>
    )
}

export default Activities
