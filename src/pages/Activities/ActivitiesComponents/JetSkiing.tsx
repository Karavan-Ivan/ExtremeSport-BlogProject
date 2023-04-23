import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import Montargil from '../ActivitiesComponents/img/Montargil.png'
import SanDiego from '../ActivitiesComponents/img/SanDiego.png'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {}

const JetSkiing = (props: Props) => {
    return (
        <>
            <Grid container spacing={4} className="Blocks">
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={SanDiego} alt="" />
                        <h2>San Diego, California, USA</h2>
                        <h3>
                            Mild year-round temperatures, a large number of
                            water sports that you can perform like snorkeling or
                            scuba diving, and the historic architecture of the
                            Old Town — there are multiple things one can like
                            about San Diego.
                            <span>
                                Furthermore, there are many boat tours and other
                                eco-tour adventures that you can use. When Miami
                                seems to be too obvious of an option for a
                                holiday trip, visit the city of San Diego!
                            </span>
                        </h3>
                        <FavoriteIcon className="buttonLike" />
                    </Item>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={Montargil} alt="" />
                        <h2>Montargil</h2>
                        <h3>
                            Many countries in Southern Europe can boast
                            fantastic weather for jet-skiing. Nonetheless, only
                            Portugal, a country located in southwestern Europe,
                            seems to be so rich in recreational activities.
                            <span>
                                For example, the Montargil dam is an amazing
                                place for all water sports enthusiasts. Not only
                                do you get the beautiful sights, but more
                                importantly, you gain many options of how you
                                can spend your time. You can rent kayaks,
                                jet-skis (if you do not want to bring your own),
                                or bodyboards at the dam. Additionally, clubs
                                and pubs can serve as a great way to spend
                                evenings. Make sure to explore Montargil while
                                it remains unspoiled!
                            </span>
                        </h3>
                        <FavoriteIcon className="buttonLike" />
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default JetSkiing
