import { useSelector } from "react-redux";
import { MENU_IMG_URL } from "../../utils/constants";

import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../utils/cartSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            if (item?.menuItem?.card?.info?.price) {
                total += item?.menuItem?.card?.info?.price / 100;
            } else {
                total += item?.menuItem?.card?.info?.defaultPrice / 100;
            }
        });
        return total;
    };

    // Update the total price when cartItems change
    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cartItems]);

    return (
        <div className="flex flex-col mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4 py-10 bg-gray-50 text-gray-800">
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <button className="bg-green-700 p-1 mx-4 rounded-md text-white hover:font-semibold hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <ul className="flex flex-col divide-y divide-gray-300">
                {
                    cartItems.map(cartItem => (
                        <li key={cartItem?.menuItem?.card?.info?.id} className="flex flex-col py-5 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={MENU_IMG_URL + cartItem?.menuItem?.card?.info?.imageId} alt="Image not provided" />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-gray-600">
                                                {cartItem?.name}
                                            </p>
                                            <h3 className="text-lg font-semibold leadi sm:pr-8">{cartItem?.menuItem?.card?.info?.name}</h3>
                                            <p className="text-sm text-gray-600">{cartItem?.menuItem?.card?.info?.description}</p>
                                        </div>
                                        <div className="text-right">
                                            {
                                                (cartItem?.menuItem?.card?.info?.price) ? <p className="text-lg font-semibold">₹{cartItem?.menuItem?.card?.info?.price / 100}</p> : <p className="text-lg font-semibold">₹{cartItem?.menuItem?.card?.info?.defaultPrice / 100}</p>
                                            }
                                            <p className="text-sm line-through text-gray-400">₹75.50</p>
                                        </div>
                                    </div>
                                    <div className="flex text-sm">
                                        <button type="button" className="hover:text-red-700 flex items-center px-2 py-1 pl-0 space-x-1" onClick={() => handleRemoveItem(cartItem?.menuItem?.card?.info?.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-red-700">
                                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                <rect width="32" height="200" x="168" y="216"></rect>
                                                <rect width="32" height="200" x="240" y="216"></rect>
                                                <rect width="32" height="200" x="312" y="216"></rect>
                                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                            </svg>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="space-y-1 text-right">
                <p className="text-lg font-semibold">Total amount: ₹{totalPrice}</p>
                <p className="text-sm text-gray-600">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-between space-x-4">
                <Link to={"/"} type="button" className="px-6 py-2 border rounded-md border-indigo-600">Back
                    <span className="sr-only sm:not-sr-only"> to shop</span>
                </Link>
                {
                    (totalPrice) ?
                        <Link to={"/checkout"} type="button" className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200 cursor-pointer">
                            <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                        </Link> :
                        <p type="button" className="px-6 py-2 rounded-md bg-gray-600 text-white">
                            <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                        </p>
                }
            </div>
        </div>
    )
}

export default Cart;