import './App.css';
import MyHeader from './components/Header';
import Card from './components/Card';
import Lasagne from './imgs/lasagne.jpg';
import Userinfo from './components/User';
import Recipe from './components/Recipie';
import Item from './components/Item';
import Game from './components/Game';
import AddGamers from './components/AddGamers';
import Clicker from './components/Clicker';
import NavLinks from './components/NavLinks';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';
import FilmReq from './components/Film';

function App() {
  return (
  
      <div classname ="App">
        <header classname = "AppHeader">
          <FilmReq/>
        </header>
      </div>
   

  );
}

export default App;
