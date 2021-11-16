const NavBar = () => {
    return (
        <nav className="grey lighten-4">
            <div className="nav-wrapper">
                <a href="#" className="grey-text text-darken-4 left brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="grey-text text-darken-4"href="sass.html">Sass</a></li>
                        <li><a className="grey-text text-darken-4"href="badges.html">Components</a></li>
                        <li><a className="grey-text text-darken-4"href="collapsible.html">JavaScript</a></li>
                    </ul>
            </div>
        </nav>
    )
}

export default NavBar