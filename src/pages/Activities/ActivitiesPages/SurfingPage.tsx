import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import Surfing from '../ActivitiesComponents/Surfing'
import './ActivitiesPages.scss'
import surfingPageImg1 from '../ActivitiesComponents/img/surfingPageImg1.png'
import surfingPageImg2 from '../ActivitiesComponents/img/surfingPageImg2.png'

type Props = {}

const SurfingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <h1 className="surfingH1">
                Live A Watersports Lifestyle And Harvest The Long Term Benefits
            </h1>

            <Grid container spacing={6}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="surfingPageBlock">
                        <img src={surfingPageImg1} alt="" />
                        <h2>Challenge Yourself And Push The Limits</h2>
                        <h3>
                            Dolor sit amet consectets adipiscing elits sed
                            eiusmod tempor incidid untsayead labored dolore
                            magna aliqua. Quis ipsum suspendise ultrices
                            gravidas risu commodo viverra sed ipsum.
                        </h3>
                    </Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="surfingPageBlock">
                        <img src={surfingPageImg2} alt="" />
                        <h2>Experience Ultimate Satisfaction In The Water</h2>
                        <h3>
                            Dolor sit amet consectets adipiscing elits sed
                            eiusmod tempor incidid untsayead labored dolore
                            magna aliqua. Quis ipsum suspendise ultrices
                            gravidas risu commodo viverra sed ipsum.
                        </h3>
                    </Item>
                </Grid>
            </Grid>
            <hr />
            <Surfing />
        </div>
    )
}

export default SurfingPage
