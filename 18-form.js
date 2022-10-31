import React, { useState } from 'react';

const Home = () => {
    const [user, setUser] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
    }

    const handleInput = (event) => {
        const fuildName = event.target.name;
        const value = event.target.value;
        // console.log(fuildName,value);
        const newUser = {...user};  
        newUser[fuildName]=value;
        setUser(newUser)
    }
    
    return (
        <div>
            <h1>This is home </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onBlur={handleInput} type="text" name="name" id="" />
                <br />
                <label htmlFor="email">Email</label>
                <input onBlur={handleInput} type="email" name="email" id="" />
                <br />
                <button type="submit">Submite</button>
            </form>
        </div>
    );
};

export default Home;