import { Link } from "react-router-dom"
import { scroller } from 'react-scroll'

import ResaturantContainer from "./RestaurantContainer"
import Alert from "./Alert"

const Body = () => {
  const handleScrollToSection = () => {
    scroller.scrollTo('restaurants', {
      smooth: true,
      duration: 500,
      offset: -80,
    })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        {/* <Alert /> */}
        <div className="sm:flex mx-auto items-center gap-5 max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Left Part */}
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">Discover Delicious Restaurants</h1>
            <p className="text-xl mb-12">
              Explore a wide range of cuisines and find your favorite restaurants. Whether you're craving mouthwatering pizza, sizzling steaks, exotic sushi, or delightful desserts, our platform offers a diverse selection of culinary delights to satisfy every craving.
            </p>
            <Link className="bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-200 ease-in-out" onClick={handleScrollToSection}>Get Started</Link>
          </div>

          {/* Right Part */}
          <div className="w-fit md:w-1/2">
            <img src="https://images.unsplash.com/photo-1616734755909-bb016ce64930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Chef with Food" className="rounded-lg shadow-md" />
          </div>
        </div>
        <div className="mx-auto mt-10 text-center max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Experience the Finest Dining Experience</h2>
          <p className="text-lg">With our curated selection of restaurants, you can enjoy a wide variety of delicious cuisines crafted by expert chefs. From cozy cafes to upscale fine dining establishments, we bring you the best dining experiences that will tantalize your taste buds and leave you craving for more.</p>
        </div>
      </section>

      {/* Heading Section */}
      <section id="restaurants" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mt-4 mb-2 text-4xl tracking-tight font-bold text-center text-red-800">Top Restaurants</h3>
        <hr className="w-[275] h-1 mx-auto bg-gray-400 border-0 rounded"></hr>
      </section>
      <ResaturantContainer />
    </main>
  )
}

export default Body
