import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import About from './pages/About'
import Error from './pages/Error'
import RestaurantMenu from './pages/RestaurantMenu'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const Signup = lazy(() => import("./pages/Signup"))
const Login = lazy(() => import("./pages/Login"))

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
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
                path: "/about",
                element: <About />
            }, {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }, {
                path: "/signup",
                element: <Suspense><Signup /></Suspense>
            }, {
                path: "/login",
                element: <Suspense><Login /></Suspense>
            }
        ],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);