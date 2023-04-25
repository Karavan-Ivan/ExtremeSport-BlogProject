import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import './ActivitiesPages.scss'
import { Button } from 'react-bootstrap'
import { toogleLike } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    description: string
    image: string
    category: string
    descriptionFull: string
}

const ActivitiesBlock = ({
    id,
    title,
    description,
    image,
    category,
    descriptionFull,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()

    return (
        <>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h3>
                {description}
                <span className="descriptionFull">{descriptionFull}</span>
            </h3>
            <Button
                variant="outlined"
                className="buttonLike"
                onClick={() => dispatch(toogleLike(id))}
            >
                {isLiked ? (
                    <FavoriteIcon className="like" />
                ) : (
                    <FavoriteIcon className="notLike" />
                )}
            </Button>
        </>
    )
}

export default ActivitiesBlock
