import { NavLink } from 'react-router-dom'
import { setActive } from 'container/App/App'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu">
            <button>
                <NavLink to="/" className={setActive}>
                    Home
                </NavLink>
            </button>
            <button>
                <NavLink to="/AboutUs" className={setActive}>
                    About us
                </NavLink>
            </button>
            <button className="dropDownBtn">
                <NavLink to="/Activities" className={setActive}>
                    Activities
                    <div className="dropDownContent">
                        <li>
                            <NavLink to="/MountainBiking" className={setActive}>
                                Mountain Biking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/SnowSports" className={setActive}>
                                Snow Sports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Surfing" className={setActive}>
                                Surfing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Skateboarding" className={setActive}>
                                Skateboarding
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/JetSkiing" className={setActive}>
                                Jet Skiing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/IceClimbing" className={setActive}>
                                Ice Climbing
                            </NavLink>
                        </li>
                    </div>
                </NavLink>
            </button>

            <button>Latest News</button>
            <button>
                <NavLink to="/Contact" className={setActive}>
                    Contact
                </NavLink>
            </button>
        </div>
    )
}

export default Menu
