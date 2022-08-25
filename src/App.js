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

function App() {
  return (
  
      <div classname ="App">
        <header classname = "AppHeader">
          <MyHeader />
          <Userinfo/>
          <Card title="Lasange" img = {Lasagne} description="A rich and creamy whole-wheat pasta dish filled 
          layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with 
          imported, premium quality mozzarella." />
          <Clicker/>
        </header>
      </div>
   

  );
}

export default App;
