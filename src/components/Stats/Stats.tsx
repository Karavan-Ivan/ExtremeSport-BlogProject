import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing'
import './Stats.scss'

type Props = {}

const Stats = (props: Props) => {
    return (
        <Grid container spacing={2} className="Stats">
            <Grid item md={3} xl={3} lg={3} sm={3}>
                <Item className="SportsActivities Item">
                    <h1>10+</h1>
                    <h3>Sports Activities</h3>
                    <DownhillSkiingIcon fontSize="large" className="Icon" />
                </Item>
            </Grid>
            <Grid item md={3} xl={3} lg={3} sm={3}>
                <Item className="RegisteredEnthusiasts Item">
                    <h1>3k+</h1>
                    <h3>Registered Enthusiasts</h3>
                    <EmojiPeopleIcon fontSize="large" className="Icon" />
                </Item>
            </Grid>
            <Grid item md={3} xl={3} lg={3} sm={3}>
                <Item className="YearsOfExperience Item">
                    <h1>15+</h1>
                    <h3>Years of Experience</h3>
                    <HourglassTopIcon fontSize="large" className="Icon" />
                </Item>
            </Grid>
            <Grid item md={3} xl={3} lg={3} sm={3} sx={{ height: 'md={3}' }}>
                <Item className="AverageRating Item">
                    <h1>9.5</h1>
                    <h3>Average Rating</h3>
                    <SentimentVerySatisfiedIcon
                        fontSize="large"
                        className="Icon"
                    />
                </Item>
            </Grid>
        </Grid>
    )
}

export default Stats
