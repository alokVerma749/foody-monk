import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
// import { CARDS } from "../../utils/mockData";
import { RESTAURANT_API } from "../../utils/constants";
import Shimmer from "./Shimeer";


const ResaturantContainer = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setListOfFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(() => {
        fetchData();
    }, []);

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
                    Filter To Rated Restaurants
                </button>
            </div >

            {/* cards container */}
            <div className="res-container flex flex-row flex-wrap">
                {
                    listOfFilteredRestaurants.map((card) => {
                        return (
                            < RestaurantCard key={card.data.id} resData={card} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ResaturantContainer;