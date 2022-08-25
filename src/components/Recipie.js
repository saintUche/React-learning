import { useState } from 'react';


const Recipe = () => {

    const[foodName, setFoodName] = useState("");
    const[ingredients, setIngredients] = useState("");
    const[steps, setSteps] = useState("");
    const[rating, setRating] = useState(0);


    const printValues = e => {
            e.preventDefault();
            console.log(foodName, ingredients, steps, rating);
        };
    
    const clearValue = e => {
        e.preventDefault();
        console.log("")
    }

    const stateShow = (e) => {
        this.setState({
            text: {e}
        });
    }

    return(
        <>
        <h2>{this.setState.text}</h2>
         <table>
            <tr>
              <th> <button  >Show ingredients</button> </th>
              <th> <button>show steps</button> </th>
              <th> <button>show ratings</button> </th>
            </tr>
        </table>

        <form onSubmit={printValues}>
            <label>ingredients:</label>
                <input name="ingredients" type ="text" value = {ingredients} onChange={e => setIngredients(e.target.value)}></input>
            <label>steps:</label>
               <input name="steps" type ="text" value = {steps} onChange={e => setSteps(e.target.value)}></input>
            <label>setRating</label>
               <input name="rating" type ="text" value = {rating} onChange={e => setRating(e.target.value)}></input>
            <button>Submit</button>
        </form>
        </>
    )
} 


export default Recipe;