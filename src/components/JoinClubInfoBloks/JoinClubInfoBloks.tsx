import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import './JoinClubInfoBloks.scss'
import { Link } from 'react-router-dom'

type Props = {}

const JoinClubInfoBloks = (props: Props) => {
    return (
        <Grid container spacing={10} className="JoinClubInfoBloks">
            <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className="gridBlock"
            >
                <Item className="block sportsVideos">
                    <h1>Sports videos</h1>
                    <h2>Get inspired</h2>
                    <hr />
                    <h3>Watch</h3>
                </Item>
            </Grid>
            <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className="gridBlock"
            >
                <Link to="/Activities" className="activeNavLink">
                    <Item className="block clubActivities">
                        <h1>Club activities</h1>
                        <h2>View all sports</h2>
                        <hr />
                        <h3>Look</h3>
                    </Item>
                </Link>
            </Grid>
            <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                className="gridBlock"
            >
                <Link to="/AboutUs" className="activeNavLink">
                    <Item className="block team">
                        <h1>Meet our team</h1>
                        <h2>The instructors</h2>
                        <hr />
                        <h3>Check</h3>
                    </Item>
                </Link>
            </Grid>
        </Grid>
    )
}

export default JoinClubInfoBloks
