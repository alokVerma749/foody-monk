import axios from "axios";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { MENU_IMG_URL, URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Admin = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetchOrders()
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(URL + 'admin/orders', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
            setOrders(response.data.orders);
            if (response.data.success) {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                toast.error(response.data.message, {
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
            toast.error('You are not an admin', {
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
            const response = await axios.delete(URL + 'admin/order/' + id, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
            setOrders(response.data.orders);
            if (response.data.success) {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                toast.error(response.data.message, {
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
            toast.error('order cannot be deleted', {
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

    return (<>
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
        {
            orders.length !== 0 ?
                <div>
                    <Link to={'/admin/addcuisine'} className="w-fit bg-green-600 m-5 p-3 mx-auto block">Add Cuisine</Link>
                    <h1 className="font-semibold text-center text-3xl text-red-600">Pending Orders To Process</h1>
                    <ul>
                        {orders.map(order => <li className="border border-red-600 m-5" key={order._id}>
                            {order.name}
                            {order.address}
                            <ul>
                                {
                                    order.cartItems.map(cartItem => <li key={cartItem.card.info.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                        <div className="flex w-full space-x-2 sm:space-x-4">
                                            <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={MENU_IMG_URL + cartItem.card.info.imageId} alt="Polaroid camera" />
                                            <div className="flex flex-col justify-between w-full pb-4">
                                                <div className="flex justify-between w-full pb-2 space-x-2">
                                                    <div className="space-y-1">
                                                        <h3 className="text-lg font-semibold leadi sm:pr-8">{cartItem.card.info.name}</h3>
                                                        <p className="text-sm text-gray-600">{cartItem.card.info.description}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-semibold">₹{cartItem.card.info.price / 100}</p>
                                                        <p className="text-sm line-through text-gray-400">₹75.50</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>)
                                }
                            </ul>
                            <button onClick={() => handleDelete(order._id)}>Done</button>

                        </li>)}
                    </ul>
                </div>
                :
                <p>not fetched</p>
        }
    </>
    )
}

export default Admin;