import {useState} from 'react'
import AddItems from './AddItems';
import Item from './Item';

const ShoppingCart = () => {

   const [itemName, setItemName] = useState("");
   const [items, setItems] = useState([]);

   const [quantity, setQuantity] = useState(0);
   const [quantities, setQuantities] = useState([]);

   const newItem = ({ target }) => {
        setItemName(target.value)
    }

    const newQuantity = ({ targs }) => {
        setQuantity(targs.value)
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const handleAdd = () => { 
        // Save player name  state to array 
        setQuantities(quantities => [...quantities, quantity]);
        setItems(items => [...items, itemName]);
        console.log(items, quantities)
    }

    return(
       <>
           <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd} newQuantitiy={newQuantity} />
           <Item items={items} quantities={quantities}/> 
       </>
   )
}
export default ShoppingCart;