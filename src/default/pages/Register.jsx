import React, { useState, useContext } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '../../Firebase/auth'
import { AccountContextVariable } from '../../context/AccountContext';
import Swal from 'sweetalert2';


const Register = () => {

    const { account_state, account_dispatch } = useContext(AccountContextVariable);

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)    //loader k liye
    const [errorMessage, setErrorMessage] = useState('')
    const [errors, setErrors] = useState({});   //validation

    const validateForm = () => {
        const errors = {};


        if (!email.trim()) {
            errors.email = 'Email is required';
        }
        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        const payload = {
            email,
            password,
        };

        console.log("payload of signup", payload)

        // fb
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                // successfull signing
                await doCreateUserWithEmailAndPassword(email, password);
                // You can add an alert here

                if (email === 'admin@gmail.com') {
                    account_dispatch({
                        type: 'account',
                        token: 'admin',
                        userDetails: payload,
                    });
                    
                } else {

                    account_dispatch({
                        type: 'account',
                        token: 'user',
                        userDetails: payload,
                    });
                    
                }

                Swal.fire({
                    title: 'ACCOUNT CREATED SUCCESSFULLY',
                    text: 'Thank You',
                    icon: 'success',
                    confirmButtonText: 'Continue Shopping',
                });


            } catch (error) {
                setErrorMessage(error.message);

                console.log(error)
                Swal.fire({
                    title: 'Sorry, Account Not Created',
                    text: error,
                    icon: 'warning',
                    confirmButtonText: 'Continue',
                });

            }
            setIsRegistering(false);
        }
    }

    return (
        <>
            {account_state.userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main style={{backgroundColor:""}} className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="container text-center my-5">
                        <h1>Be A Part Of Our Family</h1>
                    </div>

        <div className="d-flex justify-content-center">

        

                    <form
                        onSubmit={onSubmit}
                        className=""
                    >

                        <div className="form-group">
                            <label htmlFor="email" className='my-3'>Email</label>
                            <input type="email" id="email" autoComplete='email' required className="form-control rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        <div className="form-group">
                            <label className="text-sm text-gray-600 font-bold mt-3">
                                Password
                            </label>
                            <div>

                            <small className=''>* Should be atleast 8 characters:</small>
                            </div>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                            {errors.Password && <small className="text-danger">{errors.Password}</small>}

                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold mt-3">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 mb-5 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 btn btn-dark font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Register'}
                        </button>
                        <div className="text-sm text-center my-5">
                            Already have an account? {'   '}
                            <Link to={'/account'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register