const item = ({items, quantities}) => {

    const Display = ({ itemName }) => <li> {itemName} </li>
    return ( 
        <>
            <ul className="previousSearch">
                {items.map((itemName, i) => (
                    <Display
                        itemName={itemName}
                        // Prevent duplicate keys by appending index:
                        key={i}
                    />

                ))}
            </ul>
            <ul className="previousSearch2">
                {quantities.map((quantity, i) => (
                    <Display
                        quantity={quantity}
                        // Prevent duplicate keys by appending index:
                        key={i}
                    />
                ))}
            </ul>
        </>
        );
}

export default item;