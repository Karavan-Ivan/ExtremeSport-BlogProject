import activitiesArray from 'utils/activitiesArray'
import './Activities.scss'
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import ActivitiesBlock from './ActivitiesComponents/ActivitiesBlock'

type Props = {}

type Activities = {
    id: number
    title: string
    description: string
    image: string
    category: string
    descriptionFull: string
}

const ActivitiesPage = (props: Props) => {
    return (
        <div className="Activities mainContainer container">
            <h1 className="allActivitiesH1">All Activities</h1>
            <hr />
            <Grid container spacing={6} className="Blocks">
                {activitiesArray.map(
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

export default ActivitiesPage
