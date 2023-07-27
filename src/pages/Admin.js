import axios from "axios";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MENU_IMG_URL, URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Admin = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(URL + "admin/orders", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
                });
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
            toast.error("You are not an admin", {
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
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(URL + "admin/order/" + id, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
                });
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
    };

    return (
        <>
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
            {orders.length !== 0 ? (
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 py-10 bg-gray-50 text-gray-800">
                    <div className="buttons flex flex-row justify-center space-x-5">
                        <Link
                            to={"/admin/addcuisine"}
                            className="w-fit block mx-auto bg-green-600 text-white py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200"
                        >
                            Add Cuisine
                        </Link>
                        <Link
                            to={"/admin/contact"}
                            className="w-fit block mx-auto bg-transparent outline hover:outline-none outline-1  py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600 hover:text-white hover:shadow hover:shadow-red-800 transition ease-linear duration-200"
                        >
                            Contacts
                        </Link>
                        <Link
                            to={"/admin/users"}
                            className="w-fit block mx-auto bg-transparent outline hover:outline-none outline-1 py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600  hover:text-white hover:shadow hover:shadow-red-800 transition ease-linear duration-200"
                        >
                            Users
                        </Link>
                    </div>
                    <h1 className="text-3xl font-semibold text-center text-red-700">
                        Pending Orders To Process
                    </h1>
                    <ul className="divide-y divide-red-600">
                        {orders.map((order) => (
                            <li className="p-4 bg-white shadow-md" key={order._id}>
                                <div className="text-lg font-bold mb-2">{order.name}</div>
                                <div className="mb-3">{order.address}</div>
                                <ul>
                                    {order.cartItems.map((cartItem) => (
                                        <li
                                            key={cartItem?.menuItem?.card?.info?.id}
                                            className="flex flex-col py-4 sm:py-6 sm:flex-row sm:justify-between border-b border-gray-300"
                                        >
                                            <div className="flex w-full space-x-2 sm:space-x-4">
                                                <img
                                                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                                                    src={MENU_IMG_URL + cartItem?.menuItem?.card?.info?.imageId}
                                                    alt={cartItem?.menuItem?.card?.info?.name}
                                                />
                                                <div className="flex flex-col justify-between w-full pb-4">
                                                    <p className="text-gray-600">
                                                        {cartItem?.name}
                                                    </p>
                                                    <h3 className="text-lg font-semibold">
                                                        {cartItem?.menuItem?.card?.info?.name}
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        {cartItem?.menuItem?.card?.info?.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-sm line-through text-gray-400">
                                                            ₹75.50
                                                        </div>
                                                        <div className="text-lg font-semibold">
                                                            {
                                                                (cartItem?.menuItem?.card?.info?.price) ? <p>₹{cartItem?.menuItem?.card?.info?.price / 100}</p> : <p>₹{cartItem?.menuItem?.card?.info?.defaultPrice / 100}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between items-center mt-5">
                                    <button
                                        type="button"
                                        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200"
                                        onClick={() => handleDelete(order._id)}
                                    >
                                        Done
                                    </button>
                                    <div className="text-lg font-semibold">
                                        Total Price: ₹{order.totalPrice}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-2xl text-center font-black px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 text-gray-800">
                    No orders to display!
                </p>
            )}
        </>
    );
};

export default Admin;