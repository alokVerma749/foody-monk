import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAccount } from '../../utils/userSlice';

import { URL } from '../../utils/constants';


const Login = () => {
    const [userData, setUserData] = useState(
        {
            "email": "",
            "password": ""
        }
    )
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitdata();
        setUserData({
            "name": "",
            "address": "",
            "email": "",
            "password": ""
        })
    }
    const dispatch = useDispatch();
    const submitdata = async () => {
        try {
            const res = await axios.post(URL + 'user/login', userData)
            const response = await res.data;
            if (response.success) {
                localStorage.setItem("token", response.token);
                dispatch(setAccount(
                    {
                        isLoggedIn: true,
                    }
                ));
                toast.success(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                setTimeout(() => {
                    navigate('/cart')
                }, 1000);
            } else {
                toast.error(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log(error.stack);
            toast.error('user not exist', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className="flex flex-col mx-auto m-8 max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com"
                            value={userData.email} onChange={(e) => setUserData({
                                ...userData,
                                email: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****"
                            value={userData.password} onChange={(e) => setUserData({
                                ...userData,
                                password: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                        <Link to={'/signup'} className="hover:underline text-indigo-600">Sign up</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;