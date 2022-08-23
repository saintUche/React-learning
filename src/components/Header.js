import logo from "../imgs/cook-logo.png"
import './Header.css';

const Header = () => {
    return (
    <header className="header-container">
        <nav className="navbar navbar-expand-sm">
        <a
            className="nav-brand"
            href="/"
        >
            <img alt="logo" src={logo} width="100" />
        </a>
        <a href="/" className="navbar-brand">
            Uche's Recipies!
        </a>
        </nav>
    </header>
    );
}
export default Header; 