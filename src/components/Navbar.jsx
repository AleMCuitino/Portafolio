import React from "react";
import "../components/Navbar.css";
import Behance from "../assests/Behanceicon.png"
import Instagram from "../assests/Instagramicon.png"
import Linkedin from "../assests/Linkedinicon.png"

function Navbar (){
    return(
        <div> 
            <nav>
                <h1 className="nombre">Ale M.Cuitiño</h1>
                <ul className="secciones">
                    <li className="link">Acerca de mi</li>
                    <li className="link">Trabajos</li>
                    <li className="link">Contacto</li>   
                    <li><img className="iconos" src={Linkedin} alt="Icono linkedin"/></li>
                    <li><img className="iconos" src={Instagram} alt="Icono instagram"/></li>
                    <li><img className="iconos" src={Behance} alt="Icono behance"/></li>
                </ul>
            </nav>
        </div> 
    )
}

export default Navbar;