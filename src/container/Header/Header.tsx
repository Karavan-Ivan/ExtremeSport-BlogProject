import './Header.scss'
import '../container.scss'
import Logo from 'components/Logo/Logo'
import { Container } from '@mui/system'
import { useLocation } from 'react-router-dom'
import headerMainBackgroungImg from './img/headerMainBackgroungImg.png'
import headerAboutUsBackgroungImg from './img/headerAboutUsBackgroungImg.png'
import headerActivitiesBackgroungImg from './img/headerActivitiesBackgroungImg.png'
import headerContactBackgroungImg from './img/headerContactBackgroungImg.png'
import headerIceClimbingBackgroungImg from './img/headerIceClimbingBackgroungImg.png'
import headerJetSkiingBackgroungImg from './img/headerJetSkiingBackgroungImg.png'
import headerMountainBikingBackgroungImg from './img/headerMountainBikingBackgroungImg.png'
import headerSkateboardingBackgroungImg from './img/headerSkateboardingBackgroungImg.png'
import headerSnowSportBackgroungImg from './img/headerSnowSportBackgroungImg.png'
import headerSurfingBackgroungImg from './img/headerSurfingBackgroungImg.png'
import MenuMain from 'components/Menu/Menu'

type Props = {}

const Header = (props: Props) => {
    const location = useLocation()

    const changeBackgroundImage = () => {
        if (location.pathname === '/AboutUs') {
            return headerAboutUsBackgroungImg
        }
        if (location.pathname === '/Activities') {
            return headerActivitiesBackgroungImg
        }
        if (location.pathname === '/Contact') {
            return headerContactBackgroungImg
        }
        if (location.pathname === '/IceClimbing') {
            return headerIceClimbingBackgroungImg
        }
        if (location.pathname === '/MountainBiking') {
            return headerMountainBikingBackgroungImg
        }
        if (location.pathname === '/SnowSports') {
            return headerSnowSportBackgroungImg
        }
        if (location.pathname === '/Skateboarding') {
            return headerSkateboardingBackgroungImg
        }
        if (location.pathname === '/Surfing') {
            return headerSurfingBackgroungImg
        }
        if (location.pathname === '/JetSkiing') {
            return headerJetSkiingBackgroungImg
        } else {
            return headerMainBackgroungImg
        }
    }

    return (
        <>
            <Container
                className="app-bar container"
                sx={{
                    backgroundImage: `url(${changeBackgroundImage()})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 455px',
                    backgroundPosition: 'center',
                }}
                maxWidth={false}
            >
                <Logo />
                <MenuMain />
                <div className="whiteVector"></div>
            </Container>
        </>
    )
}

export default Header
