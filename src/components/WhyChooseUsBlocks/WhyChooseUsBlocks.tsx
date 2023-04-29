import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import SnowboardingIcon from '@mui/icons-material/Snowboarding'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import HikingIcon from '@mui/icons-material/Hiking'
import './WhyChooseUsBlocks.scss'

type Props = {}

const WhyChooseUsBlocks = (props: Props) => {
    return (
        <Grid container spacing={5} className="WhyChooseUsBlocks">
            <Grid item xs={12} md={3} lg={3} xl={3} sm={6}>
                <Item className="WhyChooseUsBlock">
                    <div className="imageBlock AboutTeam">
                        <SnowboardingIcon className="Icon" />
                    </div>
                    <h2>A Team Of Passionate Individuals</h2>
                    <h3>
                        Dolor sit amet mag eliqua esimod ipsum dolore suspendise
                        quis ultrices gravida risus.
                    </h3>
                </Item>
            </Grid>
            <Grid item xs={12} md={3} lg={3} xl={3} sm={6}>
                <Item className="WhyChooseUsBlock">
                    <div className="imageBlock AboutTrain">
                        <AccessibilityNewIcon className="Icon" />
                    </div>
                    <h2>Learn To Train Your Body To Perform</h2>
                    <h3>
                        Dolor sit amet mag eliqua esimod ipsum dolore suspendise
                        quis ultrices gravida risus.
                    </h3>
                </Item>
            </Grid>
            <Grid item xs={12} md={3} lg={3} xl={3} sm={6}>
                <Item className="WhyChooseUsBlock">
                    <div className="imageBlock AboutSkills">
                        <SportsMartialArtsIcon className="Icon" />
                    </div>
                    <h2>Overcome Your Fears And Master Your Skills</h2>
                    <h3>
                        Dolor sit amet mag eliqua esimod ipsum dolore suspendise
                        quis ultrices gravida risus.
                    </h3>
                </Item>
            </Grid>
            <Grid item xs={12} md={3} lg={3} xl={3} sm={6}>
                <Item className="WhyChooseUsBlock">
                    <div className="imageBlock AboutGlobe">
                        <HikingIcon className="Icon" />
                    </div>
                    <h2>Enjoy Extreme Activities Around The Globe</h2>
                    <h3>
                        Dolor sit amet mag eliqua esimod ipsum dolore suspendise
                        quis ultrices gravida risus.
                    </h3>
                </Item>
            </Grid>
        </Grid>
    )
}

export default WhyChooseUsBlocks
