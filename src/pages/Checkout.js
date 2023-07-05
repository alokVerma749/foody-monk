import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../utils/userSlice";


const Checkout = () => {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        isLoggedIn();
    }, [])
    const user = useSelector(store => store.account.user);
    const dispatch = useDispatch();
    const isLoggedIn = async () => {
        const response = await axios.get('https://foody-monk-2.onrender.com/checkout', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (response.data.success) {
            setIsLogged(true);
            dispatch(setAccount({
                isLoggedIn: true,
                name: response.data.name,
                email: response.data.email,
                address: response.data.address,
            }))
        }
    }
    return (
        isLogged ? <div>
            {user.name}
            {user.email}
            {user.address}
        </div> : <div>log in first</div>
    )
}
export default Checkout;