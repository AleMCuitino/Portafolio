import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import Prueba from './views/Prueba';
import Acerca from './views/Acerca';
import Trabajos from './views/Trabajos';
import Contacto from './views/Contacto';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <button type="button"><Link to="/Prueba" exact className="nombre">Ale M.Cuitiño</Link></button>
                <ul className="secciones">
                  <li>
                    <button type="button"><Link className="link" to="/Acerca" exact>Acerca de mi</Link></button>
                  </li>
                  <li>
                    <button type="button"><Link className="link" to="/Trabajos" exact>Trabajos</Link></button>
                  </li>
                  <li>
                    <button type="button"><Link className="link" to="/Contacto" exact>Contacto</Link></button>
                  </li> 
                </ul>
        </nav>
        <Switch>
          
          <Route path='/Acerca' exact>
            <Acerca />
          </Route>
          <Route path='/Trabajos' exact>
            <Trabajos />
          </Route>
          <Route path='/Contacto'exact>
            <Contacto />
          </Route>
          <Route path='/'exact>
            <Prueba />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
