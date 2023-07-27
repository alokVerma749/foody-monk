import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../utils/store'

import Error from './pages/Error'
import RestaurantMenu from './pages/RestaurantMenu'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import AddCuisine from './pages/AddCuisine'
import AddMenuItems from './pages/AddMenuItems'
import AdminMsg from './pages/AdminMsg'

const Admin = lazy(() => import("./pages/Admin"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
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
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/admin/addcuisine",
                element: <AddCuisine />
            },
            {
                path: "/admin",
                element: <Suspense fallback={<h1>Loading...</h1>}><Admin /></Suspense>
            },
            {
                path: "/signup",
                element: <Suspense fallback={<h1>Loading...</h1>}><Signup /></Suspense>
            },
            {
                path: "/login",
                element: <Suspense fallback={<h1>Loading...</h1>}><Login /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
            },
            {
                path: "/privacy",
                element: <Suspense fallback={<h1>Loading....</h1>}><Privacy /></Suspense>
            },
            {
                path: "/terms",
                element: <Suspense fallback={<h1>Loading....</h1>}><Terms /></Suspense>
            },
            {
                path: "/addmenuitems",
                element: <AddMenuItems />
            },
            {
                path: "/admin/contact",
                element: <AdminMsg />
            },
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);