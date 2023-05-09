import './Header.scss'
import '../container.scss'
import Logo from 'components/Logo/Logo'
import { Container } from '@mui/system'
import { useLocation } from 'react-router-dom'
import MenuMain from 'components/Menu/Menu'
import activitiesArray, {
    Activities,
    getActivityObject,
} from 'utils/activitiesArray'

type Props = {
    activityObject?: {
        [id: number]: Activities
    }
}

const Header = ({
    activityObject = getActivityObject(activitiesArray),
}: Props) => {
    const location = useLocation()

    const headerArticeChange = () => {
        if (
            location.pathname === '/' ||
            +location.pathname.substring(location.pathname.length - 1) % 1 === 0
        ) {
            return 'Experience The Spirit Of Adventure Sports'
        } else {
            return location.pathname.replace('/', '').replace('-', ' ')
        }
    }

    return (
        <>
            <Container className="app-bar container" maxWidth={false}>
                <div className="logoMenu">
                    <Logo />
                    <MenuMain />
                </div>
                <h1 className="headerArtice">{headerArticeChange()}</h1>
                <div className="whiteVector"></div>
            </Container>
        </>
    )
}

export default Header
