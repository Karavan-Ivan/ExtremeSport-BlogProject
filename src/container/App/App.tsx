import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'components/Fonts/Fonts.scss'
import 'components/Button/Button.scss'
import 'components/UlIcons/UlIcons.scss'
import { Route, Routes } from 'react-router-dom'
import AboutUs from 'pages/AboutUs/AboutUs'
import Activities from 'pages/Activities/Activities'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/Main" element={<Main />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Activities" element={<Activities />}></Route>
            </Routes>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
