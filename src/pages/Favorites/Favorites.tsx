import { Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Item from '@mui/material/Grid'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import activitiesArray, {
    Activities,
    getActivityObject,
} from 'utils/activitiesArray'
import '../Activities/Activities.scss'
import { toogleLike } from 'redux/likeReducer'
import { Link } from 'react-router-dom'

type Props = {
    activitiesObject?: {
        [id: number]: Activities
    }
}

const Favorites = ({
    activitiesObject = getActivityObject(activitiesArray),
}: Props) => {
    const activitiesLiked = useAppSelector((state) => state.productsLike)

    const filteredObject = Object.fromEntries(
        Object.entries(activitiesLiked).filter((item) => item[1] === true)
    )

    const dispatch = useAppDispatch()

    return (
        <div className="Activities mainContainer container">
            <h1 className="favoritesH1">Your Favorites</h1>
            <hr className="favoritesHr" />
            <Grid container spacing={6} className="Blocks">
                {Object.keys(filteredObject).map((id) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Item className="Block">
                            <img
                                src={activitiesObject[parseInt(id)].image}
                                alt=""
                            />
                            <h2>
                                <Link to={`/activity/${id}`}>
                                    {activitiesObject[parseInt(id)].title}
                                </Link>
                            </h2>
                            <h3>
                                {activitiesObject[parseInt(id)].description}
                            </h3>
                            <span>
                                {activitiesObject[parseInt(id)].descriptionFull}
                            </span>
                            <button
                                className="buttonLike"
                                onClick={() => dispatch(toogleLike(id))}
                            >
                                {filteredObject[id] ? (
                                    <FavoriteIcon className="like" />
                                ) : (
                                    <FavoriteIcon className="notLike" />
                                )}
                            </button>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Favorites
