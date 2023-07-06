import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../utils/userSlice";
import { Navigate } from "react-router-dom";

import { MENU_IMG_URL } from '../../utils/constants'
import { ToastContainer, toast } from "react-toastify";


const Checkout = () => {

    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        isLoggedIn();
    }, [])

    const user = useSelector(store => store.account.user);
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.card.info.price / 100;
        });
        return total;
    };

    // Update the total price when cartItems change
    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cartItems]);


    const isLoggedIn = async () => {
        const response = await axios.get('https://foody-monk-2.onrender.com/checkout', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (response.data.success) {
            dispatch(setAccount({
                isLoggedIn: true,
                name: response.data.name,
                email: response.data.email,
                address: response.data.address,
            }))
        } else {
            dispatch(setAccount({
                isLoggedIn: false,
                name: "",
                email: "",
                address: "",
            }))
        }
    }

    const handleProceed = async () => {
        const response = await axios.post('https://foody-monk-2.onrender.com/proceedwithpayment', {
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
            console.log(response);
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
    }

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
                <div className="left">
                    <div className="name">{user.name}</div>
                    <div className="email">{user.email}</div>
                    <div className="address">{user.address}</div>
                </div>
                <div className="right">
                    <ul className="flex flex-col divide-y divide-gray-300">
                        {
                            cartItems.map(cartItem => (
                                <li key={cartItem.card.info.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
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
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold"> ₹{totalPrice}</span>
                    </p>
                    <p className="text-sm text-gray-600">Not including taxes and shipping costs</p>
                </div>
                <button className="block mx-auto bg-green-700 text-white p-2 m-5" onClick={handleProceed}>Proceed With Payment</button>
            </> :
            <Navigate to={'/login'} />
    )
}
export default Checkout;