import { Link } from "react-router-dom";

function Navbar(){
    <header>
        <a href={"/"}>Dav.i</a>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Sobre"}>Sobre</Link></li>
                <li><Link to={"/Projects"}>Projetos</Link></li>
                <li><Link to={"/Skills"}>Habilidades</Link></li>
                <li><Link to={"/Contact"}>Contato</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;