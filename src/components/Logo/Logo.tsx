import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: '1' }}>
            <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link>
        </Typography>
    )
}

export default Logo
