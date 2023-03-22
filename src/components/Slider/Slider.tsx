import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'
import './Slider.scss'
import 'keen-slider/keen-slider.min.css'
import iceClimbing from './img/ice-climbing.jpg'
import jetskiing from './img/jetskiing.jpg'
import mountainBiking from './img/mountain-biking.jpg'
import skateboarding from './img/skateboarding.jpg'
import snowSports from './img/snow-sports.jpg'
import surfing from './img/water-boarding.jpg'

type Props = {}

const carousel: KeenSliderPlugin = (slider) => {
    const z = 400
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on('created', () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${
                deg * idx
            }deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on('detailsChanged', rotate)
}

export default function Slider() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: '.carousel__cell',
            renderMode: 'custom',
            mode: 'free-snap',
        },
        [carousel]
    )

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide1 ">
                        <img src={mountainBiking} />
                        <h1>Mountain Biking</h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide2">
                        <img src={snowSports} />
                        <h1>Snow Sports</h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide3">
                        <img src={surfing} />
                        <h1>Surfing</h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide4">
                        <img src={skateboarding} />
                        <h1>Skateboarding</h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide5">
                        <img src={jetskiing} />
                        <h1>Jet Skiing</h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide6">
                        <img src={iceClimbing} />
                        <h1>Ice Climbing</h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
