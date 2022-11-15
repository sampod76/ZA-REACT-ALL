/*
66-conssept-session (naster in crud operation - milestone 11)
time - 2:25 menites
 {
    path:'/course/:id',
    loader: ({params})=>fetch(`https://s-seven-omega.vercel.app/allCorses/${params.id}`),
    element:<Corse> </Corse>
},

আর যদি  useEffect <Corse> </Corse> কম্পোনেন্ট এর ভিতর লিখে ডাটা আনি | তাহলে এখান কার patams .id টা | কম্পোনেন্ট এর ভিতর একটা হুক দিয়ে পেতে হবে | const {id} = useParams() এভাবে পেতে হবে

*/



