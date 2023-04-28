import './WhatPeopleSaying.scss'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import WhatPeopleSayingSwiper from './WhatPeopleSayingSwiper'
import ReviewsForm from '../Reviews/ReviewsForm'

type Props = {}

const WhatPeopleSaying = (props: Props) => {
    return (
        <div className="mainContainer">
            <div className="WhatPeopleSaying">
                <Grid
                    container
                    spacing={8}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <Grid item sm={12} md={6} xl={6} lg={6}>
                        <Item className="WhatPeopleSayingInfo">
                            <h2>Share The Passion</h2>
                            <h1>What People Are Saying</h1>
                            <hr />
                            <ReviewsForm />
                        </Item>
                    </Grid>
                    <Grid item sm={12} md={6} xl={6} lg={6}>
                        <Item className="WhatPeopleSayingSwiper">
                            <WhatPeopleSayingSwiper />
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default WhatPeopleSaying
