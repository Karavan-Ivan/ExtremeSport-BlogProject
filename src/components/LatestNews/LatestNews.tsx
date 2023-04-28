import Grid from '@mui/material/Grid'
import LatestNewsArticle from 'components/LatestNewsArticle/LatestNewsArticle'
import LatestNewsSlider from 'components/LatestNewsSlider/LatestNewsSlider'

type Props = {}

const LatestNews = (props: Props) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                marginTop: '100px',
                border: '30px solid #0C3543',
                borderRadius: '10px',
            }}
        >
            <Grid item sm={12} md={3}>
                <LatestNewsArticle />
            </Grid>
            <Grid item sm={12} md={9}>
                <LatestNewsSlider />
            </Grid>
        </Grid>
    )
}

export default LatestNews
