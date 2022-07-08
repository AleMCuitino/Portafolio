import React from "react";
import "../views/Trabajos.css";
import Tributo1 from "../assests/WebTributo/Tributo1.jpg"
import Tributo2 from "../assests/WebTributo/Tributo2.jpg"
import Tributo3 from "../assests/WebTributo/Tributo3.jpg"
import Music1 from "../assests/MusicOn/Music1.png"
import Music2 from "../assests/MusicOn/Music2.png"
import Music3 from "../assests/MusicOn/Music3.png"
import Tracker1 from "../assests/Tracker/Tracker1.png"
import Tracker2 from "../assests/Tracker/Tracker2.png"
import Tracker3 from "../assests/Tracker/Tracker3.png"


function Trabajos() {

    return (

        <div>
            <div className="tituloTrabajos">
                <h2 className="tituloArea">01  Web Design</h2>
            </div>

            <div className="proyecto">
                <h4 className="tituloProyecto">impresionismo</h4>
            </div>

            <div className="area">
                <div className="descripcion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Arcu odio ut sem nulla pharetra diam sit amet. Semper risus in hendrerit gravida rutrum quisque non tellus. Consequat nisl vel pretium lectus quam id leo in. Pharetra diam sit amet nisl suscipit.</p>
                </div>
                <div className="imagen1">
                    <img className="tributo" src={Tributo1} alt="Sección página web tributo"/>
                </div>
            </div>
            <div className="imagenes">
                <div className="imagen2">
                    <img className="tributo1" src={Tributo2} alt="Sección página web tributo"/>
                </div>
                <div className="imagen3">
                    <img className="tributo2" src={Tributo3} alt="Sección página web tributo"/>
                </div>
            </div>
            <div className="proyecto">
                <h4 className="tituloProyecto">musicon</h4>
            </div>
            <div className="area">
                <div className="descripcion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Arcu odio ut sem nulla pharetra diam sit amet. Semper risus in hendrerit gravida rutrum quisque non tellus. Consequat nisl vel pretium lectus quam id leo in. Pharetra diam sit amet nisl suscipit.</p>
                </div>
                <div className="imagen1">
                    <img className="tributo" src={Music1} alt="Sección página web tributo"/>
                </div>
            </div>
            <div className="imagenes">
                <div className="imagen2">
                    <img className="tributo1" src={Music2} alt="Sección página web tributo"/>
                </div>
                <div className="imagen3">
                    <img className="tributo2" src={Music3} alt="Sección página web tributo"/>
                </div>
            </div>
            <div className="proyecto">
                <h4 className="tituloProyecto">COVID Tracker</h4>
            </div>
            <div className="area">
                <div className="descripcion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Arcu odio ut sem nulla pharetra diam sit amet. Semper risus in hendrerit gravida rutrum quisque non tellus. Consequat nisl vel pretium lectus quam id leo in. Pharetra diam sit amet nisl suscipit.</p>
                </div>
                <div className="imagen1">
                    <img className="tributo" src={Tracker1} alt="Sección página web tributo"/>
                </div>
            </div>
            <div className="imagenes">
                <div className="imagen2">
                    <img className="tributo1" src={Tracker2} alt="Sección página web tributo"/>
                </div>
                <div className="imagen3">
                    <img className="tributo2" src={Tracker3} alt="Sección página web tributo"/>
                </div>
            </div>


        </div>
    )
}

export default Trabajos;