import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../utils/userSlice";

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
        console.log(response.data.response.name)
        console.log(response.data.response)
    }

    return (
        user.isLoggedIn ?
            <div>
                {user.name}
                {user.email}
                {user.address}
                {/* {cartItems}
                {totalPrice} */}
                <button onClick={handleProceed}>Proceed With Payment</button>
            </div> :
            <div>log in first</div>
    )
}
export default Checkout;