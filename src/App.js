
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navegacion from './components/Navegacion';
import Gatitos from './components/Gatitos';
import Michi from './components/Michi';
import Michis from './components/Michis';
import Mimiendo from './components/Mimiendo';
import Pequenio from './components/Pequenio';

function App() {
  return (
  <Router>
    <div className="container">
      <h3 className="text-center m-1 text-white">Michigaleria - imágenes de <a href="https://www.pexels.com/" target="_blank"> Pexels.com </a> </h3>
    </div>
    <Route path= "/Gatitos" component= {Gatitos}/> 
    <Route path= "/Michi" component= {Michi} /> 
    <Route path= "/Michis" component= {Michis} /> 
    <Route path= "/Mimiendo" component= {Mimiendo} /> 
    <Route path= "/Pequenio" component= {Pequenio} /> 

    <Navegacion/>
  </Router>
  );
}

export default App;
