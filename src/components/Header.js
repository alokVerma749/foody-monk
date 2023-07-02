import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useOnlineStatus from "../../utils/hooks/useOnlineStatus";

const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const cartItems = useSelector(store => store.cart.items);
  return (
    <header className="bg-red-600 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/foody-monk.png" alt="Foody Monk Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">Home</a>
                <a href="/cart" className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">Cart-{cartItems.length}</a>
                <a href="/about" className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">About Us</a>
                <a href="/contact" className="text-white px-3 py-2 text-base font-bold hover:font-black transition-all ease-in duration-300">Contact</a>
                <span className="animate-pulse font-bold px-1 bg-white rounded-full">{onlineStatus ? "🔴 live" : "❗offline"}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="/login" onClick={() => {
              (logStatus === "Login") ? setLogStatus("Logout") : setLogStatus("Login");
            }} className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-md transition ease-linear duration-300">{logStatus}
            </a>
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
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/cart" className="text-white block px-3 py-2 rounded-md text-base font-medium">Cart-{cartItems.length}</a>
            <a href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-white">
            <div className="flex items-center px-5">
              <div className="ml-auto">
                <a href="/login" onClick={() => {
                  (logStatus === "Login") ? setLogStatus("Logout") : setLogStatus("Login");
                }} className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-md transition-all">{logStatus}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;