import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import BeaverCreek from '../ActivitiesComponents/img/BeaverCreek.png'
import Courchevel from '../ActivitiesComponents/img/Courchevel.png'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {}

const SnowSports = (props: Props) => {
    return (
        <>
            <Grid container spacing={4} className="Blocks">
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={Courchevel} alt="" />
                        <h2>Courchevel 1850, France</h2>
                        <h3>
                            Courchevel 1850 is both the highest in elevation and
                            in prices in the Three Valleys (Les Trois Vallées of
                            Courchevel, Meribel and Les Menuires)
                            <span>
                                , which now includes a fourth valley in France –
                                Maurienne. There’s plenty of entertainment
                                off-piste. Hot and happening apres-ski spots
                                include Le Tremplin or Kudeta. Or dance till the
                                wee hours in Les Caves or La Grange.
                            </span>
                        </h3>
                        <FavoriteIcon className="buttonLike" />
                    </Item>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                    <Item className="Block">
                        <img src={BeaverCreek} alt="" />
                        <h2>Beaver Creek, United States</h2>
                        <h3>
                            Beaver Creek loves kiddies. For seven weeks over the
                            winter season, the resort organizes special family
                            activities with complimentary offers for kids.
                            <span>
                                Outside of those weeks, kids will still have a
                                blast with complimentary apres-ski chocolate
                                chip cookies at 3 p.m., and every week there’s
                                storytelling on the hill and an in-village
                                street fair with music, magic and more.
                            </span>
                        </h3>
                        <FavoriteIcon className="buttonLike" />
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default SnowSports
