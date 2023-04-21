import './WhatPeopleSaying.scss'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import WhatPeopleSayingSwiper from './WhatPeopleSayingSwiper'

type Props = {}

const WhatPeopleSaying = (props: Props) => {
    return (
        <div className="WhatPeopleSaying">
            <Grid container spacing={8}>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="WhatPeopleSayingInfo">
                        <h2>Share The Passion</h2>
                        <h1>What People Are Saying</h1>
                        <hr />
                    </Item>
                </Grid>
                <Grid item md={6} xl={6} lg={6}>
                    <Item className="WhatPeopleSayingSwiper">
                        <WhatPeopleSayingSwiper />
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default WhatPeopleSaying
