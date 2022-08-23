import './App.css';
import MyHeader from './components/Header';
import Card from './components/Card';
import Lasagne from './imgs/lasagne.jpg';


function App() {
  return (
  
      <div classname ="App">
        <header classname = "AppHeader">
          <MyHeader />
          <Card title="Lasange" img = {Lasagne} description="A rich and creamy whole-wheat pasta dish filled 
          layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with 
          imported, premium quality mozzarella." />
        </header>
      </div>
   

  );
}

export default App;
