import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-5">
                    <div className="w-full md:w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-sm mb-4">
                            Explore a wide range of cuisines and find your favorite restaurants with our curated selection of restaurants.&nbsp;
                            <Link to="/about" className="text-blue-400 hover:text-blue-500">
                                Read More...
                            </Link>
                        </p>
                        <ul className="inline-flex space-x-4">
                            <li>
                                <a href="#" title="Facebook" className="block bg-blue-600 hover:bg-blue-700 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" className="">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Twitter" className="block bg-blue-600 hover:bg-blue-700 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" className="">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Linkedin" className="block bg-blue-600 hover:bg-blue-700 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" className="">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-sm mb-3">
                            123 Street, City Name, Country
                        </p>
                        <p className="text-sm mb-3">
                            Phone: +1 234 5678
                        </p>
                        <p className="text-sm mb-3">
                            Email: info@example.com
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-4">Important Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="text-white hover:text-gray-300">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-white hover:text-gray-300">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white hover:text-gray-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-gray-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-around gap-8 border-t border-gray-700 pt-4 mt-4 text-center text-sm">
                    <div className="border-b border-gray-700 text-center text-sm">
                        &copy; {new Date().getFullYear()} Foody Monk. All rights reserved.
                    </div>
                    <div className="border-b border-gray-700 text-center text-sm">
                        Created by ❣️ <a href="https://github.com/jalandhar04" target="_blank" className="text-blue-400 hover:text-blue-500">Jalandhar</a> &amp; <a href="https://github.com/alokverma749" target="_blank" className="text-blue-400 hover:text-blue-500">Alok</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
