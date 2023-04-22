import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import SurreyHills from '../ActivitiesComponents/img/SurreyHills.png'
import WoburnTrails from '../ActivitiesComponents/img/WoburnTrails.png'

type Props = {}

const MountainBiking = (props: Props) => {
    return (
        <>
            <Grid container spacing={4} className="Blocks">
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={SurreyHills} alt="" />
                        <h2>The Surrey Hills: Peaslake</h2>
                        <h3>
                            The Surrey Hills area has become a sort of
                            accidental mecca for mountain biking in the south.
                            <span>
                                People flock here at the weekends, meaning the
                                car parks and trails can be very busy. And for
                                good reason – dozens of hand-shaped sections of
                                singletrack dart through the pretty forest, with
                                soft, loamy dirt and short uphills making this
                                one of the most fun days out on a bike near
                                London. For those looking for a real test, the
                                Northern Monkey line can't be missed. With so
                                many riders frequenting the trails near
                                Peaslake, this has become a real – if unofficial
                                – hub for mountain biking. Make sure to be
                                courteous to other trail users, take your
                                rubbish home and spend a few pounds in a local
                                pub or cafe to make sure mountain biking
                                continues to be welcomed here.
                            </span>
                        </h3>
                    </Item>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={WoburnTrails} alt="" />
                        <h2>Woburn Trails</h2>
                        <h3>
                            Woburn is a legendary riding spot that has welcomed
                            all levels and disciplines of riders for decades.
                            <span>
                                Its sandy soil makes it a perfect all-weather
                                riding spot and its modest slopes mean it is a
                                great place to go for a singletrack blast on its
                                network of trails. The most notable feature is
                                the jump area: Matt Jones is regularly seen on
                                the massive central rhythm sections, but there
                                are also jumps, drops and hucks of all sizes
                                scattered around. Woburn is maintained by
                                volunteers (there are regular dig days – get
                                yourself signed up) and a day pass or annual
                                membership is required to ride.
                            </span>
                        </h3>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default MountainBiking
