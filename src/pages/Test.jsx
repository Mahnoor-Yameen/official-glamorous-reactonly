import React, { useState, useContext, useEffect } from 'react';
import { OrderContext } from "./../context/order/context";

const Login = () => {
    // const { loginDetails, updateLoginDetails } = useContext(OrderContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =  (e) => {
        e.preventDefault();



        const loginFormDetails = {
            email,
            password,
        };
        // updateLoginDetails(loginFormDetails);
    }

    

    // Log loginDetails whenever it changes
    // useEffect(() => {
    //     console.log("kiddi" , loginDetails);
    // }, [loginDetails]);

    return (
        <div>
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back!</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div>
                                <label className="text-sm text-gray-600 font-bold">Email</label>
                                <input
                                    type="text"
                                    autoComplete='email'
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-600 font-bold my-3">Password</label>
                                <input
                                    type="password"
                                    autoComplete='current-password'
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className="w-full mb-3 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`w-full px-4 py-2 btn btn-dark font-medium rounded-lg `}
                            >
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;
