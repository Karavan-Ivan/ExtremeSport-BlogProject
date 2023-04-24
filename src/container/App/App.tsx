import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'pages/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'components/Fonts/Fonts.scss'
import 'components/Button/Button.scss'
import 'components/UlIcons/UlIcons.scss'
import { Route, Routes } from 'react-router-dom'
import AboutUs from 'pages/AboutUs/AboutUs'
import Activities from 'pages/Activities/Activities'
import MountainBikingPage from 'pages/Activities/ActivitiesPages/MountainBikingPage'
import SnowSportsPage from 'pages/Activities/ActivitiesPages/SnowSportsPage'
import SurfingPage from 'pages/Activities/ActivitiesPages/SurfingPage'
import SkateboardingPage from 'pages/Activities/ActivitiesPages/SkateboardingPage'
import JetSkiingPage from 'pages/Activities/ActivitiesPages/JetSkiingPage'
import IceClimbingPage from 'pages/Activities/ActivitiesPages/IceClimbingPage'
import Contact from 'pages/Contact/Contact'
import Instructors from 'pages/AboutUs/AboutUsComponents/Instructors/Instructors'
import path from 'path'

type Props = {}

export const setActive = ({ isActive }: { isActive: any }) =>
    isActive ? 'activeMenuButton' : 'MenuButton'

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Activities" element={<Activities />}></Route>
                <Route
                    path="/MountainBiking"
                    element={<MountainBikingPage />}
                ></Route>
                <Route path="/SnowSports" element={<SnowSportsPage />}></Route>
                <Route path="/Surfing" element={<SurfingPage />}></Route>
                <Route
                    path="/Skateboarding"
                    element={<SkateboardingPage />}
                ></Route>
                <Route path="/JetSkiing" element={<JetSkiingPage />}></Route>
                <Route
                    path="/IceClimbing"
                    element={<IceClimbingPage />}
                ></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            </Routes>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
