import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import Skateboarding from '../ActivitiesComponents/Skateboarding'
import './ActivitiesPages.scss'
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone'

type Props = {}

const SkateboardingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <Grid container spacing={6}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="skateBoardingInfo">
                        <h2>Feel The Excitement</h2>
                        <h1>Amazing Sporting Adventures</h1>
                        <hr />
                        <h3>
                            Dolor sit amet consectetur adipiscing elits eiusmod
                            tempor incididunts laboreyse dolore mag aliqua. Quis
                            ipsum supendise ultrices gravid. Risus commodo
                            viverra sed ipsum maecenas.
                        </h3>
                        <ul>
                            <li>
                                <ExpandCircleDownTwoToneIcon className="UlIcons" />
                                Unde omnis iste natus error sit voluptatem
                                dolore
                            </li>
                            <li>
                                <ExpandCircleDownTwoToneIcon className="UlIcons" />
                                Eaque ipsa quae ab illo inventore veritatis
                                quasi que
                            </li>
                            <li>
                                <ExpandCircleDownTwoToneIcon className="UlIcons" />
                                Accusantium dolore que laudantium totamrem
                                periam
                            </li>
                        </ul>
                    </Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="skateboardingPageImg pageImg"></Item>
                </Grid>
            </Grid>
            <hr />
            <Skateboarding />
        </div>
    )
}

export default SkateboardingPage
