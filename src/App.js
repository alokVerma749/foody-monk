import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../utils/store'

import About from './pages/About'
import Error from './pages/Error'
import RestaurantMenu from './pages/RestaurantMenu'
import Cart from './pages/Cart'

import Contact from './pages/Contact'

import Checkout from './pages/Checkout'



import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }, {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }, {
                path: "/signup",
                element: <Suspense fallback={<h1>Loading...</h1>}><Signup/></Suspense>
            }, {
                path: "/login"
                element: <Suspense fallback={<h1>Loading...</h1>}><Login/></Suspense>
            }, {
                path: "/checkout",
                element: <Suspense fallback={<h1>Loading...</h1>}><Checkout /></Suspense>

            }
        ],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);