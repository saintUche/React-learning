const AddItems = ({submitHandler, newItem, handleAdd, newQuantity}) => {
    return(
        <form onSubmit={submitHandler}>
            <input 
                placeholder="Enter item:"
                type="text"
                onChange={newItem}
            />
            <input 
                placeholder="Enter quantity"
                type="number"
                onChange={newQuantity}
            />
            <button type="button" onClick={handleAdd}>add item</button>
        </form>
    );
}

export default AddItems;