import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './LatestNewsSlider.scss'
import { Autoplay, Pagination, Navigation } from 'swiper'
import paradliding from './img/paragliding.jpg'
import skateboarding from './img/skateboarding.jpg'
import terrainVenicle from './img/terrainVenicle.jpg'

type Props = {}

const LatestNewsSlider = (props: Props) => {
    return (
        <div className="LatestNewsSlider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="SliderBlock">
                    <div>
                        <img src={paradliding} alt="" />
                    </div>
                    <h2>Paragliding Adventures Across The World</h2>
                    <h3>
                        Integer amet miut ipsum molestie bibendum vitae sitat
                        ligula fermentum tellus
                    </h3>
                </SwiperSlide>
                <SwiperSlide className="SliderBlock">
                    <div>
                        <img src={skateboarding} alt="" />
                    </div>
                    <h2>All-Terrain Vehicle Excursions For The Family</h2>
                    <h3>
                        Integer amet miut ipsum molestie bibendum vitae sitat
                        ligula fermentum tellus
                    </h3>
                </SwiperSlide>
                <SwiperSlide className="SliderBlock">
                    <div>
                        <img src={terrainVenicle} alt="" />
                    </div>
                    <h2>Best Skateboarding Big Air Skate Park</h2>
                    <h3>
                        Integer amet miut ipsum molestie bibendum vitae sitat
                        ligula fermentum tellus
                    </h3>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LatestNewsSlider
