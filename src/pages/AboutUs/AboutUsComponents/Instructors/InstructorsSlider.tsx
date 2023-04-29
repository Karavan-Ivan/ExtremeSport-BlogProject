import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'
import MarkThomas from '../img/MarkThomas.png'
import SimonJolta from '../img/SimonJolta.png'
import BillKennedy from '../img/BillKennedy.png'
import TinaLuyben from '../img/TinaLuyben.png'
import AshlieSmith from '../img/AshlieSmith.png'
import JonhAiser from '../img/JonhAiser.png'

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    769: { slidesPerView: 3 },
                    600: { slidesPerView: 2 },
                }}
            >
                <SwiperSlide>
                    <img src={MarkThomas} alt="" />
                    <h2>Mark Thomas</h2>
                    <h3>CEO Founder</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SimonJolta} alt="" />
                    <h2>Simon Jolta</h2>
                    <h3>Senior Trainer</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={BillKennedy} alt="" />
                    <h2>Bill Kennedy</h2>
                    <h3>Senior Trainer</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TinaLuyben} alt="" />
                    <h2>Tina Luyben</h2>
                    <h3>Senior Trainer</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={JonhAiser} alt="" />
                    <h2>Jonh Aiser</h2>
                    <h3>Senior Trainer</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={AshlieSmith} alt="" />
                    <h2>Ashlie Smith</h2>
                    <h3>CEO Founder</h3>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
