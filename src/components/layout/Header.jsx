import { HashLink } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    return (
        <header>
            <div className="screenMode">
                <span></span>
            </div>
            <h1><a href="index.html"></a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <HashLink to="/#participantes" smooth={true} duration={500}>SOBRE NÓS</HashLink>
                    </li>
                    <li>
                        <ScrollLink to="artigos" smooth={true} duration={500}>ARTIGOS</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="footer" smooth={true} duration={500}>CONTATO</ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;