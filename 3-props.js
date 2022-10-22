
const cosmatics = [
    { id: 1, name: 'sampod', price: 36000 },
    { id: 2, name: 'Abir', price: 34000 },
    { id: 3, name: 'hosal', price: 78000 },
    { id: 4, name: 'total', price: 38000 },
];
// 1 declair function 
// এখানে ফাংশন এর ভিতর যে প্রপার্টি গুলো দেয়া হয়েছে 
function displayDatas(){
    <Propati name='sampod' class='nine' id='12' ></Propati>
}




// 2 use props 
function Propati(props){
   return(
    <div>
        <h1>{props.name}</h1>
        <h1>{props.class}</h1>
        <h1>{props.id}</h1>
    </div>
   )
}



