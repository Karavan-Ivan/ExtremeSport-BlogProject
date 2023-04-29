import Grid from '@mui/material/Grid'
import LatestNewsArticle from 'components/LatestNewsArticle/LatestNewsArticle'
import LatestNewsSlider from 'components/LatestNewsSlider/LatestNewsSlider'
import './LatestNews.scss'
type Props = {}

const LatestNews = (props: Props) => {
    return (
        <Grid container spacing={2} className="latestNews">
            <Grid item xs={12} sm={12} md={3}>
                <LatestNewsArticle />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <LatestNewsSlider />
            </Grid>
        </Grid>
    )
}

export default LatestNews
