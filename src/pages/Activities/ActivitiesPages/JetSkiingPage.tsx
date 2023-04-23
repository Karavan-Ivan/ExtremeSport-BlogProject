import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import JetSkiing from '../ActivitiesComponents/JetSkiing'
import './ActivitiesPages.scss'
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone'

type Props = {}

const JetSkiingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <Grid container spacing={6}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="jetSkiingInfo">
                        <h2>Feel The Excitement</h2>
                        <h1>Join Us and Embark on New Adventures</h1>
                        <hr />
                        <h3>
                            Dolor sit amet consectetur adipiscing elits eiusmod
                            tempor incididunts laboreyse dolore mag aliqua. Quis
                            ipsum supendise ultrices gravid. Risus commodo
                            viverra sed ipsum maecenas.
                        </h3>
                        <ul>
                            <li>
                                <ExpandCircleDownTwoToneIcon className="UlIcons" />
                                Unde omnis iste natus error sit voluptatem
                                dolore
                            </li>
                            <li>
                                <ExpandCircleDownTwoToneIcon className="UlIcons" />
                                Eaque ipsa quae ab illo inventore veritatis
                                quasi que
                            </li>
                            <li>
                                <ExpandCircleDownTwoToneIcon className="UlIcons" />
                                Accusantium dolore que laudantium totamrem
                                periam
                            </li>
                        </ul>
                    </Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="jetSkiingPageImg pageImg"></Item>
                </Grid>
            </Grid>
            <hr />
            <JetSkiing />
        </div>
    )
}

export default JetSkiingPage
