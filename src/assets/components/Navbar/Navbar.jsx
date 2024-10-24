import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import "./Navbar.css"

function Navbar(){
    return (

        <header className="navbar">
            <Link to={"/"} className="navbarBrand">Dav.i</Link>
            <HamburgerButton/>
            <nav className="navbarNav">
                <ul className="navbarNavList">
                    <li className="navbarNavListItem"><Link className="navbarNavListItemLink" to={"/"}>Home</Link></li>
                    <li className="navbarNavListItem"><Link className="navbarNavListItemLink" to={"/Sobre"}>Sobre</Link></li>
                    <li className="navbarNavListItem"><Link className="navbarNavListItemLink" to={"/Projects"}>Projetos</Link></li>
                    <li className="navbarNavListItem"><Link className="navbarNavListItemLink" to={"/Skills"}>Habilidades</Link></li>
                    <li className="navbarNavListItem"><Link className="navbarNavListItemLink" to={"/Contact"}>Contato</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar;