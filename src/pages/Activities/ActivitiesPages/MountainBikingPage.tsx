import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import MountainBiking from '../ActivitiesComponents/MountainBiking'
import logoOrange from '../ActivitiesComponents/img/logoOrange.png'
import './ActivitiesPages.scss'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'

type Props = {}

const MountainBikingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <Grid container spacing={6}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="activitiesPageInfo">
                        <img src={logoOrange} alt="" />
                        <h1>Discover The World Of Adventure Mountain Biking</h1>
                        <h3>
                            Consectetur adipiscing elits sed eiusmod labore
                            tempor incididunts dolore magna aliqua. Quis ipsum
                            suspendise ultrices gravida. Risus commodo dui
                            kviver brya sed ipsum maecenas dolore.
                        </h3>
                        <div className="mountainBikingPageTasks">
                            <div className="iconBlock">
                                <MonochromePhotosIcon className="icon" />
                            </div>

                            <div>
                                <h2>Focus On Your Goals</h2>
                                <h3>
                                    Dolor ameta eliqua nisls mods ipsum dolore
                                </h3>
                            </div>
                        </div>
                        <div className="mountainBikingPageTasks">
                            <div className="iconBlock">
                                <SettingsAccessibilityIcon className="icon" />
                            </div>

                            <div>
                                <h2>Maintain Momentum</h2>
                                <h3>
                                    Aenean ac lacinia nunc quisque venenatis
                                </h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="mountainBikingPageImg"></Item>
                </Grid>
            </Grid>
            <hr />
            <MountainBiking />
        </div>
    )
}

export default MountainBikingPage
