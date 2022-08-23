import lasagne from "../imgs/lasagne.jpg";
import ReactDom from 'react-dom'
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="cardBody">
        <h2 className="cardTitle">{props.title}</h2>
        <img src={props.img} alt=""></img>
        <p className="cardDescription">{props.description}</p>
        <button className="cardButton">Go To Recipie!</button> 
      </div>
    </div>
  )
}

export default Card 

  