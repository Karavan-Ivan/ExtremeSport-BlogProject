import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import './JoinClubInfoBloks.scss'

type Props = {}

const JoinClubInfoBloks = (props: Props) => {
    return (
        <Grid container spacing={4} className="JoinClubInfoBloks">
            <Grid item md={4} lg={4} xl={4} className="GridBlock">
                <Item className="block SportsVideos">
                    <h1>Sports videos</h1>
                    <h2>Get inspired</h2>
                    <hr />
                    <h3>Watch</h3>
                </Item>
            </Grid>
            <Grid item md={4} lg={4} xl={4} className="GridBlock">
                <Item className="block ClubActivities">
                    <h1>Club activities</h1>
                    <h2>View all sports</h2>
                    <hr />
                    <h3>Look</h3>
                </Item>
            </Grid>
            <Grid item md={4} lg={4} xl={4} className="GridBlock">
                <Item className="block Instructors">
                    <h1>Meet our team</h1>
                    <h2>The instructors</h2>
                    <hr />
                    <h3>Check</h3>
                </Item>
            </Grid>
        </Grid>
    )
}

export default JoinClubInfoBloks
