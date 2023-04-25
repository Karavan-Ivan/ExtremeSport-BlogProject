import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import HelmckenFalls from '../ActivitiesComponents/img/HelmckenFalls.png'
import SandstoneIcePark from '../ActivitiesComponents/img/SandstoneIcePark.png'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const IceClimbing = (props: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike)

    return (
        <>
            <Grid container spacing={4} className="Blocks">
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={HelmckenFalls} alt="" />
                        <h2>Helmcken Falls, British Columbia, Canada</h2>
                        <h3>
                            Ok, so this gigantic waterfall is not your typical
                            ice climbing destination, but we just had to include
                            it because it's the most radical place to practice
                            the sport and is home to the hardest ice climb on
                            the planet.
                            <span>
                                Canadian Will Gadd and England's Tim Emmett
                                picked off the first climb back in 2010 and
                                since then more than 10 different climbs have
                                been done, two right to the top, including the
                                ultimate ascent known as Wolverine.
                            </span>
                        </h3>

                        {isLiked ? (
                            <FavoriteIcon className="buttonLike" />
                        ) : (
                            <FavoriteIcon className="buttonNotLike" />
                        )}
                    </Item>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={SandstoneIcePark} alt="" />
                        <h2>Sandstone Ice Park, Minnesota, USA</h2>
                        <h3>
                            This man-made ice park has 'farmed' ice on the side
                            of a giant canyon wall to provide frozen routes all
                            winter.
                            <span>
                                It even has lights to let you climb at the night
                                and there's a big festival held there every
                                year. The low-angle, big-featured area known as
                                Land of the Lorax is ideal for newcomers, while
                                The Stage Wall, the highest wall in park, has
                                more than 20m of challenging vertical ice.
                            </span>
                        </h3>
                        <FavoriteIcon className="buttonLike" />
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default IceClimbing
