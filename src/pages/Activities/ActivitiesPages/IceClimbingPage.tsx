import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import IceClimbing from '../ActivitiesComponents/IceClimbing'
import './ActivitiesPages.scss'
import logoOrange from '../ActivitiesComponents/img/logoOrange.png'

type Props = {}

const IceClimbingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <Grid container spacing={6}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="activitiesPageInfo">
                        <img src={logoOrange} alt="" />
                        <h1>
                            Learn To Climb With Qualified Instructors And
                            Improve Your Skill Level
                        </h1>
                        <h2 className="snowSportsH2">
                            Dolor sites amet consectetur adipiscing elits
                            eiusmod tempor incididunt laboret dolore magna
                            aliqua ut ipsum.
                        </h2>
                        <h3>
                            Consectetur adipiscing elits sed eiusmod labore
                            tempor incididunts dolore magna aliqua. Quis ipsum
                            suspendise ultrices gravida. Risus commodo dui
                            kviver brya sed ipsum maecenas dolore.
                        </h3>
                    </Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="pageImg iceClimbingPageImg1"></Item>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="pageImg iceClimbingPageImg2"></Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="activitiesPageInfo">
                        <img src={logoOrange} alt="" />
                        <h1>
                            There Is A Vast Selection Of Climbing Locations To
                            Choose From
                        </h1>
                        <h2 className="snowSportsH2">
                            Dolor sites amet consectetur adipiscing elits
                            eiusmod tempor incididunt laboret dolore magna
                            aliqua ut ipsum.
                        </h2>
                        <h3>
                            Consectetur adipiscing elits sed eiusmod labore
                            tempor incididunts dolore magna aliqua. Quis ipsum
                            suspendise ultrices gravida. Risus commodo dui
                            kviver brya sed ipsum maecenas dolore.
                        </h3>
                    </Item>
                </Grid>
            </Grid>
            <hr />
            <IceClimbing />
        </div>
    )
}

export default IceClimbingPage
