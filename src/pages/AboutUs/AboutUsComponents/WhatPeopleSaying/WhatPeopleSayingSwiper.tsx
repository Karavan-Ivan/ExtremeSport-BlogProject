import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper'
import { useAppSelector } from 'redux/hooks'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'

type Review = {
    name: string
    text: string
    image: string
    value: number | null
}

export default function App() {
    const arrReviews = useAppSelector((state) => state.reviews)

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {arrReviews.map(({ name, text, image, value }, i) => (
                    <SwiperSlide>
                        <div className="SlideInfo">
                            <img src={image} alt="" />
                            <h3>{text}</h3>
                            <h2>{name}</h2>
                            <div className="thank">
                                <h2>Thank you</h2>
                                <FavoriteTwoToneIcon className="icon" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
