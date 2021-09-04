import { Link } from "react-router-dom";
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <Link to='/' className="header__link">
                <h1 className="header__title">Overwatch Role Quiz</h1>
            </Link>
        </header>
    )
}

export default Header;