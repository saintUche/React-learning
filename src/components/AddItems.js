const AddIems = ({submitHandler, newItem, handleAdd, quantity}) => {
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
                onChange={quantity}
            />
            <button type="button" onClick={handleAdd}>add item</button>
        </form>
    );
}

export default AddIems;