const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { ContactIndex } from "./pages/ContactIndex.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { ContactDetails } from "./pages/ContactDetails.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<ContactIndex />} />
                <Route path="/contact/:id" element={<ContactDetails />} />
            </Routes>
        </section>
    </Router>
}
