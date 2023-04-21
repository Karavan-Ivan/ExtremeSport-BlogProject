import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper'
import AlexHaysmanComment from '../img/AlexHaysmanComment.jpg'
import JonsonTrimphComment from '../img/JonsonTrimphComment.jpg'
import SierrayWilliamsComment from '../img/SierrayWilliamsComment.jpg'

export default function App() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="SlideInfo">
                        <img src={JonsonTrimphComment} alt="" />
                        <h3>
                            Praesent posuere, risus nec aliquet lorem diam
                            tempor est vitae finibus tortor erat sit amet dolor.
                            Sed ipsumus neque congue biats con quatasy venenatis
                            augue.
                        </h3>
                        <h2>Jonson Trimph</h2>
                        <h2>Зірки</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SlideInfo">
                        <img src={SierrayWilliamsComment} alt="" />
                        <h3>
                            Praesent posuere, risus nec aliquet lorem diam
                            tempor est vitae finibus tortor erat sit amet dolor.
                            Sed ipsumus neque congue biats con quatasy venenatis
                            augue.
                        </h3>
                        <h2>Sierray Williams</h2>
                        <h2>Зірки</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SlideInfo">
                        <img src={AlexHaysmanComment} alt="" />
                        <h3>
                            Praesent posuere, risus nec aliquet lorem diam
                            tempor est vitae finibus tortor erat sit amet dolor.
                            Sed ipsumus neque congue biats con quatasy venenatis
                            augue.
                        </h3>
                        <h2>Alex Haysman</h2>
                        <h2>Зірки</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
