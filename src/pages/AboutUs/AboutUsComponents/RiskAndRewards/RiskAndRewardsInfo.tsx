import extremeBiking from '../img/extremeBiking.png'
import snowboardMan from '../img/Snowboarding.png'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'

type Props = {}

const RiskAndRewardsInfo = (props: Props) => {
    return (
        <>
            <Grid container spacing={8} className="RiskAndRewardsInfo">
                <Grid item sm={6} md={6} lg={6} xl={6}>
                    <Item>
                        <h2>Challenge Yourself And Push The Limits</h2>
                        <h3>
                            Dolor sit amet consectets adipiscing elits sed
                            eiusmod tempor incidid untsayead labored dolore
                            magna aliqua. Quis ipsum suspendise ultrices
                            gravidas risu commodo viverra sed ipsum.
                        </h3>
                        <img src={extremeBiking} alt="" />
                    </Item>
                </Grid>
                <Grid item sm={6} md={6} lg={6} xl={6}>
                    <Item>
                        <img src={snowboardMan} alt="" />
                        <h2>A Never Ending “Adventurous Journey”</h2>
                        <h3>
                            Dolor sit amet consectets adipiscing elits sed
                            eiusmod tempor incidid untsayead labored dolore
                            magna aliqua. Quis ipsum suspendise ultrices
                            gravidas risu commodo viverra sed ipsum.
                        </h3>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default RiskAndRewardsInfo
