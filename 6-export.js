
const add=(first ,second)=>{
    return first + second 
}

const multiple =(first ,second)=>{
    return first * second
}
// যখন কোন একটা ফাইল থেকে একটা জিনিসকে এক্সপোর্ট করতে হবে
// export default add

// যখন কোন একটা ফাইল থেকে একের অধিক জিনিস এক্সপোর্ট করতে হবে
export {add , multiple}