import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone'
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

const SkateboardingPage = (props: Props) => {
    return (
        <div className="mainContainer activitiesPages container">
            <Grid container spacing={6} className="skateboardingBlocks">
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
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
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                    <Item className="skateboardingPageImg pageImg"></Item>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={6} className="Blocks">
                {activitiesArray
                    .filter((item) => item.category === 'Skateboarding')
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

export default SkateboardingPage
