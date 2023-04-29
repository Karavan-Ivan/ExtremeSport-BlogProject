import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import surfingPageImg1 from '../ActivitiesComponents/img/surfingPageImg1.png'
import surfingPageImg2 from '../ActivitiesComponents/img/surfingPageImg2.png'
import activitiesArray from 'utils/activitiesArray'
import ActivitiesBlock from '../ActivitiesComponents/ActivitiesBlock'
import '../ActivitiesComponents/ActivitiesPages.scss'

type Props = {}

type Activities = {
    id: number
    title: string
    description: string
    image: string
    category: string
    descriptionFull: string
}

const SurfingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages">
            <h1 className="surfingH1">
                Live A Watersports Lifestyle And Harvest The Long Term Benefits
            </h1>

            <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
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
                <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
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
            <Grid container spacing={6} className="Blocks">
                {activitiesArray
                    .filter((item) => item.category === 'Surfing')
                    .map(
                        ({
                            id,
                            title,
                            description,
                            image,
                            category,
                            descriptionFull,
                        }: Activities) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Item className="Block">
                                    <ActivitiesBlock
                                        id={id}
                                        title={title}
                                        description={description}
                                        image={image}
                                        category={category}
                                        descriptionFull={descriptionFull}
                                    />
                                </Item>
                            </Grid>
                        )
                    )}
            </Grid>
        </div>
    )
}

export default SurfingPage
