import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import Bundoran from '../ActivitiesComponents/img/Bundoran.png'
import Teahupoo from '../ActivitiesComponents/img/Teahupoo.png'

type Props = {}

const Surfing = (props: Props) => {
    return (
        <>
            <Grid container spacing={4} className="Blocks">
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={Bundoran} alt="" />
                        <h2>Bundoran, Ireland</h2>
                        <h3>
                            Surprised to see Ireland on our list of epic surf
                            spots in the world? Don’t be. With waves that can
                            reach 50 feet and average around the 10-foot range,
                            Bundoran is one of the best surf spots in Europe.
                            <span>
                                Sure, the wild Atlantic swells are a bit colder
                                than you might like, but wear a wetsuit and have
                                a great time. You can warm up later, with an
                                evening in a cozy Irish pub. For novices, there
                                are four surfing schools in Bundoran where you
                                can get beginning and intermediate instruction.
                                But the pros love the rolling waves and flat
                                rocky reefs here too. Bundoran has hosted the
                                European Surfing Championships three times.
                            </span>
                        </h3>
                    </Item>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={Teahupoo} alt="" />
                        <h2>Teahupoo, Tahiti</h2>
                        <h3>
                            If you’re looking for an epic surfing experience,
                            then look no further than Teahupoo. As one of the
                            best surf destinations around the world
                            <span>
                                , it is known for its huge waves that can reach
                                up to 30 feet. The takeoff is especially
                                challenging, as the wave often breaks in a very
                                shallow area. Teahupoo is located on the south
                                coast of Tahiti and can only be reached by boat.
                                There are a few resorts located in the area, but
                                for the most part, it is undeveloped.
                            </span>
                        </h3>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default Surfing
