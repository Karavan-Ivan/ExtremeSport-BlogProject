import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'pages/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'components/Fonts/Fonts.scss'
import 'components/Button/Button.scss'
import 'components/UlIcons/UlIcons.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutUs from 'pages/AboutUs/AboutUs'
import Activities from 'pages/Activities/Activities'
import SnowSportsPage from 'pages/Activities/ActivitiesPages/SnowSportsPage'
import SurfingPage from 'pages/Activities/ActivitiesPages/SurfingPage'
import SkateboardingPage from 'pages/Activities/ActivitiesPages/SkateboardingPage'
import JetSkiingPage from 'pages/Activities/ActivitiesPages/JetSkiingPage'
import IceClimbingPage from 'pages/Activities/ActivitiesPages/IceClimbingPage'
import Contact from 'pages/Contact/Contact'
import Favorites from 'pages/Favorites/Favorites'
import MountainBikingPage from 'pages/Activities/ActivitiesPages/MountainBikingPage'
import ActivityPage from 'pages/ActivityPage/ActivityPage'

type Props = {}

export const setActive = ({ isActive }: { isActive: any }) =>
    isActive ? 'activeMenuButton' : 'MenuButton'

const App = (props: Props) => {
    const location = useLocation()

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Activities" element={<Activities />} />
                <Route
                    path="/Activities/MountainBiking"
                    element={<MountainBikingPage />}
                />
                <Route
                    path="/Activities/SnowSports"
                    element={<SnowSportsPage />}
                />
                <Route path="/Activities/Surfing" element={<SurfingPage />} />
                <Route
                    path="/Activities/Skateboarding"
                    element={<SkateboardingPage />}
                />
                <Route
                    path="/Activities/JetSkiing"
                    element={<JetSkiingPage />}
                />
                <Route
                    path="/Activities/IceClimbing"
                    element={<IceClimbingPage />}
                />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="activity/:id" element={<ActivityPage />} />
            </Routes>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
