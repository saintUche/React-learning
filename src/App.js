import './App.css';
import lasagne from './imgs/lasagne.jpg';
import background from './imgs/background.jpeg';


function Card(props){
        return(
          <div classname="card">
            <div classname="cardBody">
              <h2 classname="cardTitle"> {props.title} </h2>
              <img src={props.img} alt=""></img>
              <p>{props.description}</p>
              <button classname="cardButton">Recipie!</button>
            </div>
          </div>
        )
}

function Cards(){
  const Lasagne = {title: "Lasagne", img: {lasagne}, description: " A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella."}
  return(
    <>
    <Card title = {Lasagne} img = {Lasagne} description = {Lasagne}></Card>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <img src={background} className="background-img" alt="" />
        <h1 className="heading">Uche's Recipie Book!</h1>
      </header>
      <div className='cards'>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
