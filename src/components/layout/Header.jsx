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
        </header>
    )
}

export default Header;