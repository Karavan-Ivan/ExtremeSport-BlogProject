import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import { useParams } from 'react-router-dom'
import activitiesArray, {
    Activities,
    getActivityObject,
} from 'utils/activitiesArray'
import './ActivityPage.scss'

type Props = {
    activityObject?: {
        [id: number]: Activities
    }
}

const ActivityPage = ({
    activityObject = getActivityObject(activitiesArray),
}: Props) => {
    const { id } = useParams()
    const activity = activityObject[parseInt(id!)]

    return (
        <div className="mainContainer ActivityPage">
            <h1>{activity.title}</h1>
            <hr />
            <div className="ActivityPageBlock">
                <div className="activityInfo">
                    <h2>{activity.title}</h2>
                    <hr />
                    <h3>{activity.description}</h3>
                    <h3>{activity.descriptionFull}</h3>
                </div>

                <div className="activityImg">
                    <img src={activity.image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ActivityPage
