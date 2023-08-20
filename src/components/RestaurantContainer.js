import { useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimeer";
import Offline from "./Offline";

import useRestaurantCards from "../../utils/hooks/useRestaurantCards";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";

const ResaturantContainer = () => {
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const listOfRestaurants = useRestaurantCards(setListOfFilteredRestaurants);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <Offline />
    }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="pb-12">
            {/* Search & Filter btn Section */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="serch-box flex flex-col items-center sm:justify-between sm:flex-row p-7 max-sm:pb-0 gap-3">
                    {/* Search field */}
                    <div className="search max-sm:flex max-sm:flex-col max-sm:items-center">
                        <input value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                            type="text" name="search" id="search" placeholder="SEARCH" className="outline-none shadow shadow-red-800 p-2 max-sm:mb-2 rounded px-5" />
                        <button onClick={() => {
                            console.log(searchText);
                            const searchRestaurant = listOfRestaurants.filter(restaurant => (
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ))
                            setListOfFilteredRestaurants(searchRestaurant)

                        }} type="submit" className="items-center bg-green-700  mx-4 rounded-md text-white hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200 px-4 py-2">Search</button>
                    </div>

                    {/* filter button */}
                    <button type="button" className="bg-green-700 p-2 rounded-md text-white hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200 max-sm:whitespace-nowrap px-4"
                        onClick={() => {
                            const filteredList = listOfFilteredRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating >= 4
                            )
                            setListOfFilteredRestaurants(filteredList);
                        }}>
                        Filter Top Rated Restaurants
                    </button>
                </div >
            </section>

            {/* cards container */}
            <section>
                <div className="grid grid-flow-row gap-x-4 gap-y-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-auto max-sm:pt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
                    {
                        listOfFilteredRestaurants.map((restaurant) => {
                            return (
                                <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id} className="p-2 w-fit border border-grey rounded-md  hover:shadow transition">
                                    < RestaurantCard resData={restaurant} />
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default ResaturantContainer;