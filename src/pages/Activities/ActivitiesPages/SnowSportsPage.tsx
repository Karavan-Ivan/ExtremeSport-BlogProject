import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import logoOrange from '../ActivitiesComponents/img/logoOrange.png'
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

const SnowSportsPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages container">
            <Grid container spacing={6} className="snowSportsBlocks">
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                    <Item className="activitiesPageInfo">
                        <img src={logoOrange} alt="" />
                        <h1>
                            From Downhill Skiing To Snowboarding, Enjoyment For
                            The Entire Family
                        </h1>
                        <h2 className="snowSportsH2">
                            Dolor sites amet consectetur adipiscing elits
                            eiusmod tempor incididunt laboret dolore magna
                            aliqua ut ipsum.
                        </h2>
                        <h3>
                            Consectetur adipiscing elits sed eiusmod labore
                            tempor incididunts dolore magna aliqua. Quis ipsum
                            suspendise ultrices gravida. Risus commodo dui
                            kviver brya sed ipsum maecenas dolore.
                        </h3>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                    <Item className="snowSportPageImg pageImg"></Item>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={6} className="Blocks">
                {activitiesArray
                    .filter((item) => item.category === 'Snow Sports')
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

export default SnowSportsPage
