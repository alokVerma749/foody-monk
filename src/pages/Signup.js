import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [userData, setUserData] = useState(
        {
            "name": "",
            "address": "",
            "email": "",
            "password": ""
        }
    )
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
    const submitdata = async () => {
        try {
            const response = await axios.post('http://localhost:4000/user/signup', userData);
            if (response.data.success) {
                console.log("toast");
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
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
        }
        catch (error) {
            console.log(error);
            toast.error(error.message, {
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
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
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
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm text-gray-600">Sign up to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="name" name="name" id="name" placeholder="Alok Verma" value={userData.name} onChange={(e) => setUserData({
                            ...userData,
                            name: e.target.value
                        })} className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm">Address</label>
                        <input type="address" name="address" id="address" placeholder="321,street Gorakhpur"
                            value={userData.address} onChange={(e) => setUserData({
                                ...userData,
                                address: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
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
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-gray-50">Sign up</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                        <Link to={'/login'} className="hover:underline text-indigo-600">Sign in</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Signup;