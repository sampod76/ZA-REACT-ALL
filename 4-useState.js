import React from 'react';

const Watch = () => {
    const [count,setCount]=useState(0) 
    // ব্র্যাকেটের ভিতরে যেটা থাকবে সেটা হবে তার ডিফল্ট মান count =0 যদি বিষয়টা অংক নিয়ে হয় তাহলে 0 /1 /ect .যদি সেটা লেখা হয় '' যদি সেটা কোন array  হয় [ ] |
    // মূল কথা হচ্ছে আমি যে জিনিসটা নিয়ে কাজ করব সেটার যদি না পাই তাহলে এটা হবে 

    // এখানে প্রথমটা একটা ভেরিয়েবল পর একটা একটা ফাংশন 
    // ফাংশন-কে  আমরা ভ্যারিয়েবল দ্বারা কল করব
    const incraseSteps=()=>{
        const newStepsCount=count+1
        setCount(newStepsCount)
    console.log(count)
    } 
      return (
        <div>
            <h3>My current steps {count}</h3>
            <button onClick={incraseSteps}>incraseSteps</button>
            // or
        <button onClick={()=> setCount(count+1)}></button>
        
        <button onClick={()=> setCount((current)=>current+1)}></button>
        </div>
      
    );
};

export default Watch;



// import React from 'react';

// const Watch = () => {
//     const [count,setCount]=useState(0) 
//     const incraseSteps=()=>{
//         const newStepsCount=count+1
//         setCount(newStepsCount)
//     console.log(count)
//     } 
//       return (
//         <div>
//             <h3>My current steps {count}</h3>
//             <button onClick={incraseSteps}>incraseSteps</button>
//         </div>
//     );
// };

// export default Watch;