const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">ContactsApp</NavLink>
            <NavLink to="/contact/:id">ContactDetails</NavLink>
        </nav>
    </header>
}


