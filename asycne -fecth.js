


const login =async()=>{
    const data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const result = await data.json()
    console.log(result)

}




