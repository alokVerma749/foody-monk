import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimeer";
import { Link } from "react-router-dom";
import useRestaurantCards from "../../utils/hooks/useRestaurantCards";


const ResaturantContainer = () => {
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const listOfRestaurants = useRestaurantCards(setListOfFilteredRestaurants);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className="serch-box flex flex-row justify-between p-5 w-full">
                {/* Search field */}
                <div className="search">
                    <input value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                        type="text" name="search" id="search" placeholder='SEARCH' className='outline-none shadow-md shadow-orange-800 p-2' />
                    <button onClick={() => {
                        console.log(searchText);
                        const searchRestaurant = listOfRestaurants.filter(restaurant => (
                            restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setListOfFilteredRestaurants(searchRestaurant)

                    }} type="submit" className='bg-lime-400 p-1 mx-4 rounded-md text-white'>Search</button>
                </div>

                {/* filter button */}
                <button type="button" className='bg-lime-400 p-2 flex rounded-md text-white w-fit'
                    onClick={() => {
                        const filteredList = listOfFilteredRestaurants.filter(
                            (restaurant) => restaurant.data.avgRating >= 4
                        )
                        setListOfFilteredRestaurants(filteredList);
                    }}>
                    Filter Top Rated Restaurants
                </button>
            </div >

            {/* cards container */}
            <div className="res-container flex flex-row flex-wrap">
                {
                    listOfFilteredRestaurants.map((restaurant) => {
                        return (
                            <Link key={restaurant.data.id} to={'/restaurants/' + restaurant.data.id} className="card sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 rounded-md shadow-md shadow-green-300">
                                < RestaurantCard resData={restaurant} />
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ResaturantContainer;