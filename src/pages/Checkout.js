import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../utils/userSlice";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { MENU_IMG_URL, URL } from '../../utils/constants';

const Checkout = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const user = useSelector(store => store.account.user);
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        isLoggedIn();
    }, []);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cartItems]);

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.card.info.price / 100;
        });
        return total;
    };

    const isLoggedIn = async () => {
        try {
            const response = await axios.get(URL + 'checkout', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
            if (response.data.success) {
                dispatch(setAccount({
                    isLoggedIn: true,
                    name: response.data.name,
                    email: response.data.email,
                    address: response.data.address,
                }));
            } else {
                dispatch(setAccount({
                    isLoggedIn: false,
                    name: "",
                    email: "",
                    address: "",
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleProceed = async () => {
        try {
            const response = await axios.post(URL + 'proceedwithpayment', {
                name: user.name,
                email: user.email,
                address: user.address,
                payment: true,
                cartItems: cartItems,
                totalPrice: totalPrice,
            }, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
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
            console.error(error);
        }
    };

    return (
        user.isLoggedIn ?
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
                <div className="flex flex-col mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4 py-10 bg-gray-50 text-gray-800">
                    <h2 className="text-xl font-semibold">Shipping Information</h2>
                    <div className="">
                        <div className="userInfo mb-4">
                            <div className="name text-gray-600 font-semibold">{user.name}</div>
                            <div className="email text-gray-600">{user.email}</div>
                            <div className="address text-gray-600">{user.address}</div>
                        </div>
                        <h3 className="order text-center text-xl font-semibold mb-2">Order Summary</h3>
                        <ul className="flex flex-col divide-y divide-gray-300">
                            {cartItems.map(cartItem => (
                                <li key={cartItem.card.info.id} className="flex flex-col py-5 sm:flex-row sm:justify-between">
                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                        <img
                                            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                                            src={MENU_IMG_URL + cartItem.card.info.imageId}
                                            alt={cartItem.card.info.name}
                                        />
                                        <div className="flex flex-col justify-between w-full pb-4">
                                            <h3 className="text-lg font-semibold">{cartItem.card.info.name}</h3>
                                            <p className="text-gray-600">{cartItem.card.info.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm line-through text-gray-400">₹75.50</div>
                                                <div className="text-lg font-semibold">₹{cartItem.card.info.price / 100}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="text-right mt-4">
                            <div className="text-lg font-semibold">Total amount: ₹{totalPrice}</div>
                            <div className="text-sm text-gray-600">Not including taxes and shipping costs</div>
                        </div>
                        <button
                            className="block mx-auto bg-green-700 text-white py-2 px-4 mt-6 rounded-md hover:font-semibold hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200"
                            onClick={handleProceed}
                        >
                            Proceed With Payment
                        </button>
                    </div>
                </div>
            </> :
            <Navigate to={'/login'} />
    );
};

export default Checkout;