import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'
import { Link } from 'react-router-dom'
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
                        <Link to="/MountainBiking">
                            <img src={mountainBiking} />
                        </Link>

                        <h1>
                            <Link
                                to="/MountainBiking"
                                className="activeNavLink"
                            >
                                Mountain Biking
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide2">
                        <Link to="/SnowSports">
                            <img src={snowSports} />
                        </Link>
                        <h1>
                            <Link to="/SnowSports" className="activeNavLink">
                                Snow Sports
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide3">
                        <Link to="/Surfing">
                            <img src={surfing} />
                        </Link>
                        <h1>
                            <Link to="/Surfing" className="activeNavLink">
                                Surfing
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide4">
                        <Link to="/Skateboarding">
                            <img src={skateboarding} />
                        </Link>
                        <h1>
                            <Link to="/Skateboarding" className="activeNavLink">
                                Skateboarding
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide5">
                        <Link to="/JetSkiing">
                            <img src={jetskiing} />
                        </Link>
                        <h1>
                            <Link to="/JetSkiing" className="activeNavLink">
                                Jet Skiing
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide6">
                        <Link to="/IceClimbing">
                            <img src={iceClimbing} />
                        </Link>
                        <h1>
                            <Link to="/IceClimbing" className="activeNavLink">
                                Ice Climbing
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
