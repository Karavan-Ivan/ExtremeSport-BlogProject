import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import PlaceIcon from '@mui/icons-material/Place'
import './Contact.scss'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className="mainContainer contact">
            <h1>
                If You Have Any Questions Feel Free To Get In Touch With Our
                Team
            </h1>
            <Grid container spacing={2}>
                <Grid item sm={6} md={3} lg={3} xl={3}>
                    <Item className="block">
                        <div className="iconBlock place">
                            <PlaceIcon className="icon" />
                        </div>
                        <h2>Visit Us</h2>
                        <h3>
                            Avada Extreme Sports 1234, <br /> Avadaville, 11221
                            – USA
                        </h3>
                    </Item>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3}>
                    <Item className="block">
                        <div className="iconBlock call">
                            <CallIcon className="icon" />
                        </div>
                        <h2>Call Us</h2>
                        <h3>
                            +1 (555) 802-1234 <br /> +1 (555) 802-5678
                        </h3>
                    </Item>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3}>
                    <Item className="block">
                        <div className="iconBlock email">
                            <EmailIcon className="icon" />
                        </div>
                        <h2>Email Us</h2>
                        <h3>
                            e.sports@myavada-domain.com <br />{' '}
                            info@myavada-domain.com
                        </h3>
                    </Item>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3}>
                    <Item className="block">
                        <div className="iconBlock accessTime">
                            <AccessTimeFilledIcon className="icon" />
                        </div>
                        <h2>Opening Hours</h2>
                        <h3>
                            Mon to Fri: 9am to 10pm <br /> Saturday: 8am to 11pm
                        </h3>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
