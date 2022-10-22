


useEffect(() => {
    // onAuthStateChanged(auth, currentUser => {
    //     setUser(currentUser); এইভাবে দিলেও কাজ করতো কিন্তু এভাবে দিলে সেটা মেমোরি লীগ করত কারন সেটা বারবার শুধু ভেতরে  রান থাকতো
    const unSuscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
    })
    return () => {
        unSuscribe()   //এইটা যখনই কেউ অফিস থেকে বের হয়ে যাবে তখন সেটাকে ক্লিন করে দেবে
    }
}, [])