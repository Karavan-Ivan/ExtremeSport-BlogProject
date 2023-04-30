import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from 'assets/logo.png'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer container">
            <div className="footerInfo">
                <img src={logo} alt="" />
                <div className="JoinUs">
                    <button className="button">
                        <Link to="/Contact" className="activeNavButton">
                            Join Our Club
                        </Link>
                    </button>
                    <h3>
                        Dolor sit amet ipsum consectetur adipiscing elit sed
                        eiusmod tempor incididunt ut labore dolore magna aliqua.
                        Quis ipsum suspendisse ultrices ipsum sed dolor.
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
    )
}

export default Footer
