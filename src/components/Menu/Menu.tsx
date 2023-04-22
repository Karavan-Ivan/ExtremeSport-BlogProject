import { NavLink } from 'react-router-dom'
import { setActive } from 'container/App/App'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu">
            <button>
                <NavLink to="/Main" className={setActive}>
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
                                to="/Mountain Biking"
                                className={setActive}
                            >
                                Mountain Biking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Snow Sports" className={setActive}>
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
                            <NavLink to="/Jet Skiing" className={setActive}>
                                Jet Skiing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Ice Climbing" className={setActive}>
                                Ice Climbing
                            </NavLink>
                        </li>
                    </div>
                </NavLink>
            </button>

            <button>Latest News</button>
            <button>Contacts</button>
        </div>
    )
}

export default Menu
