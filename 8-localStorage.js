//modiul  47-storage-handrlar  -components utility localstorage
const addToDb=(id)=>{
    let shoppingCart;
    // get the shoping cart 
    const stordCart=localStorage.getItem('shopping-Cart')
    if(stordCart){
        shoppingCart=JSON.parse(stordCart)
    }else{
        shoppingCart={}
    }
    // add quantity 
    const quantity=shoppingCart[id]
    if(quantity){ //2
        const newQuantity=quantity+1
        shoppingCart[id]=newQuantity
    }
    else{//1
        shoppingCart[id]=1
    }

    localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))
}
export{addToDb}


// // -------------------------------------------
// // use local storage manage cart data
// const addToDb = (id) => {
//     let shoppingCart;
//     const stordCart = localStorage.getItem('shopping-Cart')
//     // ২য় বার -পরবর্তীতে যখন আসবে তখন তো সে  কিছু পাবে |সেজে ভ্যালুটা পাবে সেটা সেজে ভ্যালুটা পাবে সেটা JSON.stringify করা থাকবে | সেটাকে JSON.parse করে shoppingCart সেট করতে হবে
//     if (stordCart) {
//         shoppingCart = JSON.parse(stordCart)
//     }
//     // ১ম বার- যখন এখানে আসবে তখন সে 'shopping-Cart' এইটা কে খুঁজবে | কিন্তু পাবেনা | তখন else গিয়ে {} সেট  করে দেবে
//     else {
//         shoppingCart = {}
//     }
//     // ২য় বার -যখনই একই প্রোডাক্ট আবার ক্লিক করা হবে |তখন তো shoppingCart এইখানে পাবে তখন  সেটাকে খুজে তার ভ্যালুটা কে বের করবে  quantity a | newQuantity এর মাধ্যমে একেক করে বাড়াবে
//     const quantity = shoppingCart[id]
//     if (quantity) { //2
//         const newQuantity = quantity + 1
//         shoppingCart[id] = newQuantity
//     } //১ম বার- যেহেতু সে shoppingCart এইখানে নাই তাই প্রথমবার সে id /632ebffd82 এই নাম একটা প্রোপার্টি/key তৈরি করে তার ভ্যালু ১ সেট  করে দেবে |
//     else {//1
//         shoppingCart[id] = 1
//     }
//     // তারপর সেটাকে লোকাল স্টোরেজে সেট করবে
//     localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart))
// }
// export { addToDb }




// -------------Jonker vi modiul 49 --ful conseppt----------------

// use local storage to manage cart data
const addToDb2 = (id) =>{
    let shoppingCart = {};

    //get the shopping cart from local storage //প্রথম সে  আগের লোকাল স্টোরি কিছু সেভ আছে কিনা সেটা দেখবে
    const storedCart = localStorage.getItem('shopping-cart');
    //যদি থাকে তাহলে সে ভিতরে ঢুকে সেটাকে কনভার্ট করবে
    if(storedCart){//কনভার্ট করা শেষে সে shoppingCart= {} এখানে সেভ করবে
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity //যদি থাকে 
    const quantity = shoppingCart[id]; //এটার মাধ্যমে ওই আইডিটা আগের ভেলু তাকে পাবে
    if(quantity){
        const newQuantity = quantity + 1; //তারপর তার ভ্যালু এক বাড়াবে 
        shoppingCart[id] = newQuantity; //তারপর সেটাকে আবার সেট করে দেবে
    }
    else{//যদি না থাকে     তাহলে id/6a44df5g.. আইডি নামে একটা প্রোপার্টি/key ক্রিয়েট করে তার ভ্যালু  1 সেট  করবে
        shoppingCart[id] = 1; 
    }
    // তারপর নতুন জিনিসটা অথবা পুরনো জিনিসটার ভ্যালু এক বাড়িয়ে পুরো জিনিসটাকে localStorage আবার রিপ্লেস করে দেবে 
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

const getStoreCard=()=>{
    let shoppingCart={};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart
}

export {
    addToDb2, 
    removeFromDb,
    deleteShoppingCart,
    getStoreCard,
}