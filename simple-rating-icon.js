const [review, setReview] = useState({});


<div className="col-span-full sm:col-span-3   mt-4">

    <label htmlFor='ratig' className='text-lg font-bold mx-1'>Rating</label>
    <select id='ratig' className='p-2' defaultValue='5' onClick={(e) => setReview(e.target.value)} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <div className='flex'>
        {
            [...Array(parseInt(review)).keys()].map((_, index) => <span key={index}><FcRating></FcRating></span>)
        }
    </div>
</div>