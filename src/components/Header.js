import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import LogBtn from "./LogBtn";
import { setAccount } from "../../utils/userSlice";
import logo from '../images/Foody-Monk.png';

import useAuthorise from "../../utils/hooks/useAuthorise";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Responsive Header toggle flag.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const res = useAuthorise();
      dispatch(setAccount(res));
    }
  }, []);

  return (
    <header className="bg-red-600 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to={"/"}><img className="h-[50px] w-[50px]" src={logo} alt="Foody Monk Logo" /></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to={"/"} className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">Home</Link>
                <Link to={"/cart"} className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">Cart-{cartItems.length}</Link>
                <Link to={"/about"} className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">About Us</Link>
                <Link to={"/admin"} className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">Admin</Link>
                <span className="animate-pulse font-bold px-1 bg-white rounded-full">{onlineStatus ? "🔴 live" : "❗offline"}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <LogBtn />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:text-gray-200">
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={"/"} className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to={"/cart"} className="text-white block px-3 py-2 rounded-md text-base font-medium">Cart-{cartItems.length}</Link>
            <Link to={"/about"} className="text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to={"/admin"} className="text-white block px-3 py-2 rounded-md text-base font-medium">Admin</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-white">
            <div className="flex items-center px-5">
              <div className="ml-auto">
                <LogBtn />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;