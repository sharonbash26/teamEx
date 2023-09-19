const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { ContactIndex } from "./pages/ContactIndex.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<ContactIndex />} />
            </Routes>
        </section>
    </Router>
}
