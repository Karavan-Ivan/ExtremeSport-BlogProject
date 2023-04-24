import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: '1' }}>
            <Link to="/">
                <img src={logo} alt="" width="200px" height="50px" />
            </Link>
        </Typography>
    )
}

export default Logo
