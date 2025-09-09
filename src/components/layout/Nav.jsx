import { HashLink } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
    return (
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
    )
}

export default Nav;