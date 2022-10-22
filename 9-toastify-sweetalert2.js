

// 1) ---------------at fast install-------প্রথমত ইন্সটল করতে হবে
//              npm i react-toastify

//           https://npm.runkit.com/react-toastify তারপর এইখানে গিয়ে কাস্টমাইজ করতে হবে

import React from 'react';
 
// option 2)
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastifysweetalert2 = () => {


    const handelTost = () => {
        // option 4  তারপর এটা কপি করিনি বসে যেতে হবে
        // https://npm.runkit.com/react-toastify    তারপর এইখানে গিয়ে কাস্টমাইজ করতে হবে

        toast.warn('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 500, //এটা হচ্ছে টাইম কতক্ষণ চলবে
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    
    
    }
    return (
        <div>
            <button onClick={handelTost} className='button' type="submit">tomia</button>
            {/* option 3)তারপরে কম্পোনেন্ট  দিতে হবে */ } 
            <ToastContainer></ToastContainer>
        </div>
    );
};

/* note 


*/

export default Toastifysweetalert2;







//                               https://sweetalert2.github.io/

// // npm install sweetalert2

// // import Swal from 'sweetalert2'

// const handelAnswer =()=>{

//     Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//       )
// }