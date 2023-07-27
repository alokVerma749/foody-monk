import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from '../../utils/constants';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminMsg = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        fetchMessages();
    }, [])
    const fetchMessages = async () => {
        try {
            const res = await axios.get(URL + 'admin/contact', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            setMessages(res.data.response);
            if (res.data.success) {
                toast.success(res.data.message, {
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
                toast.error(res.data.message, {
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
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(URL + "admin/contact/" + id, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setMessages(res.data.contacts);
            if (res.data.success) {
                toast.success(res.data.message, {
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
                toast.error(res.data.message, {
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
            toast.error("Order cannot be deleted", {
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
        <div>
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
            <ul>
                <h1 className='font-bold text-3xl m-5 text-center'>Messages</h1>
                <li className='flex flex-row justify-around outline m-3 text-xl font-bold'>
                    <p>Email</p>
                    <p>Subject</p>
                    <p>Message</p>
                </li>
                {
                    messages.length != 0 && (
                        messages.map((message) => {
                            return (
                                <li key={message._id} className='flex flex-row justify-around outline m-3'>
                                    <p className='w-1/4 text-center' >{message.email}</p>
                                    <p className='w-1/4 text-center'>{message.subject}</p>
                                    <p className='w-1/4 text-center'>{message.message}</p>
                                    <button className='w-1/4 text-center font-semibold text-red-600 border-none outline-none hover:text-red-800' onClick={() => handleDelete(message._id)}>Delete</button>
                                </li>
                            )
                        }))
                }
            </ul>
        </div>
    )
}

export default AdminMsg