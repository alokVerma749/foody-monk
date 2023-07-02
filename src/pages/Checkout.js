import { useEffect, useState } from "react";
import axios from "axios";


const Checkout = () => {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        isLoggedIn();
    }, [])
    const isLoggedIn = async () => {
        const response = await axios.get('http://localhost:4000/checkout', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (response.data.success) {
            setIsLogged(true);
            console.log(isLogged);
            console.log(response.data.name);
        }
    }
    return (
        isLogged ? <div>ordered</div> : <div>log in first</div>
    )
}
export default Checkout;