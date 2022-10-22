import React, { useState } from 'react';
import { useEffect } from 'react';

const Watch = () => {
    const [count,setCount]=useState(0) 
    const incraseSteps=()=>{
        const newStepsCount=count+1
        setCount(newStepsCount)
   
    } 

    // এইটা মূলত কাজ করে কোন একটা জিনিসের উপরে ডিফেন্ড করার জন্য অর্থাৎ কেউ একজন চেঞ্জ হলে সে ও চেঞ্জ 
    // কার উপরে ডিপেন্ড করবে সেটা [] ভিতরে দিতে হবে
    useEffect(()=>{
    <h1>The is defind any one {count}</h1>
    console.log(count)
    // এইখানে যতবারই count চেঞ্জ হবে ততবার এসে চলতে থাকবে
    },[count])

      return (
        <div>
            <h3>My current steps {count}</h3>
            <button onClick={incraseSteps}>de diur........</button>
        </div>
    );
};

export default Watch;