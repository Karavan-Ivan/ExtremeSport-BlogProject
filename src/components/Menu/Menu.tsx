import { NavLink } from 'react-router-dom'
import { setActive } from 'container/App/App'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

type Props = {}

const MenuMain = (props: Props) => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
            <div className={menuActive ? 'menu active' : 'menu'}>
                <button className="mainMenuButton">
                    <NavLink to="/" className={setActive}>
                        Home
                    </NavLink>
                </button>
                <button className="mainMenuButton">
                    <NavLink to="/AboutUs" className={setActive}>
                        About us
                    </NavLink>
                </button>
                <button className="dropDownBtn mainMenuButton">
                    <NavLink to="/Activities" className={setActive}>
                        Activities
                    </NavLink>
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
                </button>
                <button className="mainMenuButton">
                    <NavLink to="/Favorites" className={setActive}>
                        Favorites
                    </NavLink>
                </button>
                <button className="mainMenuButton">
                    <NavLink to="/Contact" className={setActive}>
                        Contact
                    </NavLink>
                </button>
            </div>
            <button
                onClick={() => setMenuActive(!menuActive)}
                className="buttonMenuIcon"
            >
                {menuActive ? (
                    <CloseIcon className="menuIcon" />
                ) : (
                    <MenuIcon className="menuIcon" />
                )}
            </button>
        </>
    )
}

export default MenuMain
