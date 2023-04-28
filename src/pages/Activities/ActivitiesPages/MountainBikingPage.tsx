import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import logoOrange from '../ActivitiesComponents/img/logoOrange.png'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'
import activitiesArray from 'utils/activitiesArray'
import ActivitiesBlock from '../ActivitiesComponents/ActivitiesBlock'
import '../ActivitiesComponents/ActivitiesPages.scss'

type Props = {}

type Activities = {
    id: number
    title: string
    description: string
    image: string
    category: string
    descriptionFull: string
}

const MountainBikingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <Grid container spacing={6} className="mountainBikingBloks">
                <Grid item sm={6} md={6} xl={6} lg={6}>
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
                <Grid item sm={6} md={6} xl={6} lg={6}>
                    <Item className="mountainBikingPageImg"></Item>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={6} className="Blocks">
                {activitiesArray
                    .filter((item) => item.category === 'Mountain Biking')
                    .map(
                        ({
                            id,
                            title,
                            description,
                            image,
                            category,
                            descriptionFull,
                        }: Activities) => (
                            <Grid item sm={6} md={4} lg={4} xl={4}>
                                <Item className="Block">
                                    <ActivitiesBlock
                                        id={id}
                                        title={title}
                                        description={description}
                                        image={image}
                                        category={category}
                                        descriptionFull={descriptionFull}
                                    />
                                </Item>
                            </Grid>
                        )
                    )}
            </Grid>
        </div>
    )
}

export default MountainBikingPage
