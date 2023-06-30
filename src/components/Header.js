import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useOnlineStatus from "../../utils/hooks/useOnlineStatus";

const Header = () => {
    const [logStatus, setLogStatus] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
        <header className="logo flex flex-row justify-between p-5 m-1 border-none outline-none shadow-lg shadow-green-100">
            <div >LOGO</div>
            <nav className='flex flex-row list-none w-1/2 justify-evenly'>
                <li>{onlineStatus ? "✅" : "🔴"}</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart-{cartItems.length}
                    </Link>
                </li>
                <li onClick={() => {
                    (logStatus === "Login") ? setLogStatus("Logout") : setLogStatus("Login");
                }}
                    className="cursor-pointer border-none outline-none bg-lime-500 p-1 px-2 rounded-lg text-white text-sm"
                >
                    <Link to={'/login'}>
                        {logStatus}
                    </Link>
                </li>
            </nav>
        </header >
    )
}

export default Header;