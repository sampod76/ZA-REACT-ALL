import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    if (user && user.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;




// router user component 


// ================================   login paige  / use page     ==========================

// option 2

const from = location.state?.from?.pathname || '/'


// option 3
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { singInEmail, setUser, isLoder } = useContext(AuthContext)
    const navigate = useNavigate() //// otioon 1 */
    const location = useLocation()  //// option 2
    const from = location.state?.from?.pathname || '/'  //option 3

    if (isLoder) {
        return <div> Loding .....</div>
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        singInEmail(email, password)
            .then(result => {
                setUser(result.user)
                form.reset()
                navigate(from, { replace: true })  ///option 4
                // console.log(result)
            })
            .catch(error => {
                console.log(error);
            })
        console.log(email, password)
    }