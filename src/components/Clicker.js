import { useState } from 'react';

const Clicker = ({text,maxLength}) => {
    const [hidden, setHidden] = useState(true);

    if(text.length <=maxLength){
        return <span>{text}</span>
    }

    return ( 
        <span>
            {hidden ? `${text.substr(0,maxLength).trim()}...` : text}

            {hidden ? (
                <a href="" onClick={() => setHidden(false)}>Read More</a>
            ) : (
                <a href="" onClick={() => setHidden(true)}>Read Less</a>
            )}
        </span>
    );
}

export default Clicker;