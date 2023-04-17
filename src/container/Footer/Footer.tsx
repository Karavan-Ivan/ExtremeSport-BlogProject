import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import footerImg from './img/footerImg.png'
import './Footer.scss'
import logo from 'assets/logo.png'
import { Button } from '@mui/material'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item md={5}>
                    <Item className="footerImg">
                        <img src={footerImg} alt="" />
                    </Item>
                </Grid>
                <Grid item md={7}>
                    <Item className="footerInfo">
                        <img src={logo} alt="" />
                        <div className="JoinUs">
                            <Button className="button">Join Our Club</Button>
                            <h3>
                                Dolor sit amet ipsum consectetur adipiscing elit
                                sed eiusmod tempor incididunt ut labore dolore
                                magna aliqua. Quis ipsum suspendisse ultrices
                                ipsum sed dolor.
                            </h3>
                        </div>
                        <hr />
                        <div className="Contacts">
                            <div className="article">
                                <h1>Contact Us</h1>
                                <hr />
                            </div>
                            <div>
                                <h3>
                                    586 Avada Avenue, Avadaville 30221 - USA
                                </h3>
                                <h3>Email: e.sports@myavada-domain.com</h3>
                                <h3>Phone: (555) 802-1234</h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer

{
    /* <div className="footerMain">
                <div className="footerImg">
                    <img src={footerImg} alt="" />
                </div>
                <div className="footerInfo">
                    <img src={logo} alt="" />
                    <div className="JoinUs">
                        <Button className="button">Join Our Club</Button>
                        <h3>
                            Dolor sit amet ipsum consectetur adipiscing elit sed
                            eiusmod tempor incididunt ut labore dolore magna
                            aliqua. Quis ipsum suspendisse ultrices ipsum sed
                            dolor.
                        </h3>
                    </div>
                    <hr />
                    <div className="Contacts">
                        <div className="article">
                            <h1>Contact Us</h1>
                            <hr />
                        </div>
                        <div>
                            <h3>586 Avada Avenue, Avadaville 30221 - USA</h3>
                            <h3>Email: e.sports@myavada-domain.com</h3>
                            <h3>Phone: (555) 802-1234</h3>
                        </div>
                    </div>
                </div>
            </div>
        </> */
}
