import { useState } from 'react';


const Userinfo = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const printValues = e => {
        const printValues = e => {
            e.preventDefault();
            console.log(username,password);
        };

    }
    
    return(
        <>
            <form onSubmit={printValues}>
                <label>username:</label>
                    <input name="username" type ="text" value = {username} onChange={e => setUsername(e.target.value)}></input>

                <label> Password: </label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button>Submit</button>
                    
            </form>
        </>
    );
}

export default Userinfo; 