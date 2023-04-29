import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone'
import SnowboardingIcon from '@mui/icons-material/Snowboarding'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import HikingIcon from '@mui/icons-material/Hiking'
import { Link } from 'react-router-dom'

type Props = {}

const ReasonsToChooseInfo = (props: Props) => {
    return (
        <div className="mainContainer">
            <Grid container spacing={4} className="ReasonsToChooseInfo">
                <Grid item sm={12} md={5} xl={5} lg={5}>
                    <Item className="info">
                        <h2>Live The Excitement</h2>
                        <h1>Reasons To Choose Extreme Sports</h1>
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
                        <button className="button">
                            <Link to="/Activities" className="activeNavButton">
                                View Activities
                            </Link>
                        </button>
                    </Item>
                </Grid>
                <Grid item sm={12} md={7} xl={7} lg={7}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                                <Item className="ReasonToChooseBlock">
                                    <div className="imageBlock AboutTeam">
                                        <SnowboardingIcon className="Icon" />
                                    </div>
                                    <h2>A Team Of Passionate Individuals</h2>
                                    <h3>Dolor sit amet mag</h3>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                                <Item className="ReasonToChooseBlock">
                                    <div className="imageBlock AboutTrain">
                                        <AccessibilityNewIcon className="Icon" />
                                    </div>
                                    <h2>Learn To Train Your Body To Perform</h2>
                                    <h3>Dolor sit amet mag</h3>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                                <Item className="ReasonToChooseBlock">
                                    <div className="imageBlock AboutSkills">
                                        <SportsMartialArtsIcon className="Icon" />
                                    </div>
                                    <h2>
                                        Overcome Your Fears And Master Your
                                        Skills
                                    </h2>
                                    <h3>Dolor sit amet mag</h3>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                                <Item className="ReasonToChooseBlock">
                                    <div className="imageBlock AboutGlobe">
                                        <HikingIcon className="Icon" />
                                    </div>
                                    <h2>
                                        Enjoy Extreme Activities Around The
                                        Globe
                                    </h2>
                                    <h3>Dolor sit amet mag</h3>
                                </Item>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default ReasonsToChooseInfo
