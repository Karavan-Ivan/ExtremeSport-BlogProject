import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import Berlin from '../ActivitiesComponents/img/Berlin.png'
import Barcelona from '../ActivitiesComponents/img/Barcelona.png'

type Props = {}

const Skateboarding = (props: Props) => {
    return (
        <>
            <Grid container spacing={4} className="Blocks">
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={Barcelona} alt="" />
                        <h2>Barcelona</h2>
                        <h3>
                            Barcelona started to become more known in the skate
                            world in the late 1990s when Transworld was putting
                            out videos featuring some really amazing spots.
                            <span>
                                One of the most iconic is MACBA, or the
                                Barcelona Museum of Contemporary Art. With some
                                of the coolest street spots you’ll find,
                                Barcelona is a must-visit on any skater’s list.
                            </span>
                        </h3>
                    </Item>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={Berlin} alt="" />
                        <h2>Berlin</h2>
                        <h3>
                            Berlin is a city that’s known for its alternative
                            culture, and skateboarding is no exception.
                            <span>
                                One of the most famous skate spots in Berlin is
                                the Mellow Park, a massive concrete playground
                                that’s been the site of countless competitions
                                and events over the years. But the city is also
                                home to several smaller, more intimate parks,
                                like the Gleisdreieck skatepark. One of the
                                biggest skate festivals in Berlin is the annual
                                Berlin Open, which takes place every summer and
                                features some of the top riders from around the
                                world.
                            </span>
                        </h3>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default Skateboarding
