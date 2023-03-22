import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone'
import './JoinUs.scss'
import aboutExtremeSports1 from './img/about-extreme-sports-1.jpg'
import aboutExtremeSports2 from './img/about-extreme-sports-2.jpg'

type Props = {}

const JoinUs = (props: Props) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: '50px' }}
            className="JoinUs"
        >
            <Grid item md={6} sx={{ padding: '0' }}>
                <Item className="info">
                    <h2>Feel The Excitement</h2>
                    <h1>Join Us and Embark on New Adventures</h1>
                    <hr />
                    <h3>
                        Dolor sit amet consectetur adipiscing elits eiusmod
                        tempor incididunts laboreyse dolore mag aliqua. Quis
                        ipsum supendise ultrices gravid. Risus commodo viverra
                        sed ipsum maecenas.
                    </h3>
                    <ul>
                        <li>
                            <ExpandCircleDownTwoToneIcon className="UlIcons" />
                            Unde omnis iste natus error sit voluptatem dolore
                        </li>
                        <li>
                            <ExpandCircleDownTwoToneIcon className="UlIcons" />
                            Eaque ipsa quae ab illo inventore veritatis quasi
                            que
                        </li>
                        <li>
                            <ExpandCircleDownTwoToneIcon className="UlIcons" />
                            Accusantium dolore que laudantium totamrem periam
                        </li>
                    </ul>
                    <Button variant="outlined" className="button">
                        Discover More
                    </Button>
                </Item>
            </Grid>
            <Grid item md={6} alignSelf="center">
                <Item className="JoinUsImg">
                    <img src={aboutExtremeSports1} />
                    <img src={aboutExtremeSports2} />
                </Item>
            </Grid>
        </Grid>
    )
}

export default JoinUs
