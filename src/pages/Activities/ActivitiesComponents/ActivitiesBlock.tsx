import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import './ActivitiesPages.scss'
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
            <h3>{description}</h3>
            <span>{descriptionFull}</span>
            <button
                className="buttonLike"
                onClick={() => dispatch(toogleLike(id))}
            >
                {isLiked ? (
                    <FavoriteIcon className="like" />
                ) : (
                    <FavoriteIcon className="notLike" />
                )}
            </button>
        </>
    )
}

export default ActivitiesBlock
