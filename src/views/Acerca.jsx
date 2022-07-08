import React from "react";
import "../views/Acerca.css";


function Acerca() {

    return (

        <div>
            
            <div className="contenido">
                <div className="descripcionAcerca">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Arcu odio ut sem nulla pharetra diam sit amet. Semper risus in hendrerit gravida rutrum quisque non tellus. Consequat nisl vel pretium lectus quam id leo in. Pharetra diam sit amet nisl suscipit.</p>
                </div>
                <div className="herramientas">
                    <h3>Herramientas</h3>
                    <ul className="programas">
                        <li>HTML   70%</li>
                           <hr className="html"></hr>
                        <li>CSS   70%</li>
                           <hr className="css"></hr>
                        <li>JS   50%</li>
                           <hr className="js"></hr>
                        <li>React   60%</li>
                           <hr className="react"></hr>
                        <li>Figma   90%</li>
                           <hr className="figma"></hr>
                        <li>Ilustrator   95%</li>
                           <hr className="ilustrator"></hr>
                        <li>InDesign   95%</li>
                           <hr className="indesign"></hr>
                        <li>Photoshop   85%</li>
                           <hr className="photoshop"></hr>
                    </ul>
                </div>
                <div>
                {/*<img src={Alejandra} alt="Fotografía diseñadora"></img>*/}
                </div>
            </div>
        </div>
    )
}

export default Acerca;