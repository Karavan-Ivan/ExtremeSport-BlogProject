import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu">
            <button>
                <NavLink to="/Main">Home</NavLink>
            </button>
            <button>
                <NavLink to="/AboutUs">About us</NavLink>
            </button>
            <button>
                <NavLink to="/Activities">Activities</NavLink>
            </button>
            <button>Latest News</button>
            <button>Contacts</button>
        </div>
    )
}

export default Menu
