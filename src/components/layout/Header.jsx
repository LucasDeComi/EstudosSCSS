import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className="screen-mode">
                <span></span>
            </div>
            <h1><a href="index.html"></a>
            </h1>
            <Nav />
            <div className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;