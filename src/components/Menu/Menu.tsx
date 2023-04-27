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
                            <NavLink
                                to="/Activities/MountainBiking"
                                className={setActive}
                            >
                                Mountain Biking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Activities/SnowSports"
                                className={setActive}
                            >
                                Snow Sports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Activities/Surfing"
                                className={setActive}
                            >
                                Surfing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Activities/Skateboarding"
                                className={setActive}
                            >
                                Skateboarding
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Activities/JetSkiing"
                                className={setActive}
                            >
                                Jet Skiing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Activities/IceClimbing"
                                className={setActive}
                            >
                                Ice Climbing
                            </NavLink>
                        </li>
                    </div>
                </NavLink>
            </button>

            <button>
                <NavLink to="/Favorites" className={setActive}>
                    Favorites
                </NavLink>
            </button>
            <button>
                <NavLink to="/Contact" className={setActive}>
                    Contact
                </NavLink>
            </button>
        </div>
    )
}

export default Menu
