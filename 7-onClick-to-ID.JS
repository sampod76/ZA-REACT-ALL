
// যখন ক্লিকের মাধ্যমে কোন একটা আইডিকে প্যারামিটার হিসেবে পাঠাতে হয় তখন এভাবে দিতে হয়
// 47-storage-handrlar => ConsmeticOnly ,LINE 13 
//<button onClick={()=>addToCard(id)}>Add to card</button> 

// very very exclusive   --mir vi--

const [count,setCount]=useState(0)
//<button onClick={()=>setCount(count+1)}>incrase</button> 

// {/* or */}এর কাজ হচ্ছে সে বর্তমান ভ্যালুটা দেখবে অর্থাৎ এই ফাংশনটা রান হওয়ার পরে অন্য কোন ফাংশন যদি count এর ভ্যালুকে চেঞ্জ করে দেয় তাহলে সে ওটার সাথেই যোগ করবে 
//<button onClick={()=>setCount((current)=>current+1)}>incrase</button>

