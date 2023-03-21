import './Header.scss'
import '../container.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { Container } from '@mui/system'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <Container className="app-bar container">
                <Logo />
                <Menu />
                <div className="whiteVector"></div>
            </Container>
        </>
    )
}

export default Header
