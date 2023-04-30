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
                        <Link to="/Activities/MountainBiking">
                            <img src={mountainBiking} alt="" />
                        </Link>

                        <h1>
                            <Link
                                to="/Activities/MountainBiking"
                                className="activeNavLink"
                            >
                                Mountain Biking
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide2">
                        <Link to="/Activities/SnowSports">
                            <img src={snowSports} alt="" />
                        </Link>
                        <h1>
                            <Link
                                to="/Activities/SnowSports"
                                className="activeNavLink"
                            >
                                Snow Sports
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide3">
                        <Link to="/Activities/Surfing">
                            <img src={surfing} alt="" />
                        </Link>
                        <h1>
                            <Link
                                to="/Activities/Surfing"
                                className="activeNavLink"
                            >
                                Surfing
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide4">
                        <Link to="/Activities/Skateboarding">
                            <img src={skateboarding} alt="" />
                        </Link>
                        <h1>
                            <Link
                                to="/Activities/Skateboarding"
                                className="activeNavLink"
                            >
                                Skateboarding
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide5">
                        <Link to="/Activities/JetSkiing">
                            <img src={jetskiing} alt="" />
                        </Link>
                        <h1>
                            <Link
                                to="/Activities/JetSkiing"
                                className="activeNavLink"
                            >
                                Jet Skiing
                            </Link>
                        </h1>
                        <h3>Dolor sit amet magna</h3>
                    </div>
                    <div className="carousel__cell number-slide6">
                        <Link to="/Activities/IceClimbing">
                            <img src={iceClimbing} alt="" />
                        </Link>
                        <h1>
                            <Link
                                to="/Activities/IceClimbing"
                                className="activeNavLink"
                            >
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
